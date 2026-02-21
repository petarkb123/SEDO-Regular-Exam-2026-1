document.addEventListener('DOMContentLoaded', function() {
  try {
    var applyBtn = document.getElementById('apply-btn');
    if (!applyBtn) {
      console.error('Apply button not found');
      return;
    }
    
    applyBtn.addEventListener('click', function () {
      try {
        var colorInput = document.getElementById('color-input');
        var c = colorInput ? colorInput.value.trim() : '';
        if (!c) {
          console.warn('No color value provided');
          return;
        }
        var box = document.getElementById('box');
        if (box) {
          box.style.backgroundColor = c;
        } else {
          console.error('Color box element not found');
        }
      } catch (error) {
        console.error('Error applying color:', error);
      }
    });
  } catch (error) {
    console.error('Error initializing page:', error);
  }
});

document.getElementById('reset-btn').addEventListener('click', function () {
  document.getElementById('box').style.backgroundColor = '#ddd';
  document.getElementById('color-input').value = '';
});