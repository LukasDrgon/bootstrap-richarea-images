let scripts = document.getElementsByTagName("script"),
src = scripts[scripts.length-1].src;
let parser = document.createElement('a');
parser.href = src;
let assetRoot = parser.pathname.replace(/\/richarea-images.js/, "");

RichArea.registerEditor(require('./editors/ImageEditor.js'), {
  assetRoot: assetRoot,
});
