const fs = require('fs');
const path = require('path');

function fail(msg) {
  console.error('FAIL ' + msg);
  process.exit(1);
}

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
if (!html.includes('<title>Datatune by haephrati</title>')) fail('title');
if (!html.includes('<h1>Datatune</h1>')) fail('h1');
if (!html.includes('id="download-zip"')) fail('zip');
const params = JSON.parse(fs.readFileSync(path.join(root, 'params.json'), 'utf8'));
if (params.name !== 'Datatune') fail('name');
if (!params.tagline || params.tagline.indexOf('data cleansing') < 0) fail('tagline');
if (!fs.existsSync(path.join(root, 'stylesheets', 'stylesheet.css'))) fail('css');
console.log('OK DataTunePagesTests');
