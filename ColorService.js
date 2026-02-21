class ColorService {
  constructor() {
    this.colorInput = null;
    this.colorBox = null;
  }

  initialize() {
    this.colorInput = document.getElementById('color-input');
    this.colorBox = document.getElementById('box');
  }

  applyColor(color) {
    if (this.colorBox && color) {
      this.colorBox.style.backgroundColor = color;
    }
  }

  getColor() {
    return this.colorInput ? this.colorInput.value : '';
  }
}

