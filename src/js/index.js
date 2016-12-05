let scripts = document.getElementsByTagName("script"),
src = scripts[scripts.length-1].src;
let parser = document.createElement('a');
parser.href = src;
let assetRoot = parser.href.replace(/\/[^\/]+$/, "");

RichArea.registerEditor(require('./editors/ImageEditor.js'), {
  assetRoot: assetRoot,
});
