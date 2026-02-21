var colorService = new ColorService();
colorService.initialize();

document.getElementById('apply-btn').addEventListener('click', function () {
  var color = colorService.getColor();
  colorService.applyColor(color);
});

document.getElementById('reset-btn').addEventListener('click', function () {
  document.getElementById('box').style.backgroundColor = '#ddd';
  document.getElementById('color-input').value = '';
});