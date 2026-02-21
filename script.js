var colorService = new ColorService();
colorService.initialize();

document.getElementById('apply-btn').addEventListener('click', function () {
  var color = colorService.getColor();
  colorService.applyColor(color);
});
