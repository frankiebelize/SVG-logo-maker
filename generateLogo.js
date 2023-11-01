// logoGenerator.js
class LogoGenerator {
    constructor(text, textColor, shape, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
  
    generateLogo() {
      
      let svgContent;
  
      if (this.shape === 'circle') {
        svgContent = `<svg width="100" height="100">
          <circle cx="50%" cy="50%" r="50%" fill="${this.shapeColor}" />
          <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="${this.textColor}" font-size="16">${this.text}</text>
        </svg>`;
      } else if (this.shape === 'square') {
        svgContent = `<svg width="100" height="100">
          <rect width="100%" height="100%" fill="${this.shapeColor}" />
          <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="${this.textColor}" font-size="16">${this.text}</text>
        </svg>`;
      } else if (this.shape === 'triangle') {
        svgContent = `<svg width="100" height="100">
        <polygon points="50,0 0,100 100,100" fill="${this.shapeColor}" />
          <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="${this.textColor}" font-size="16">${this.text}</text>
        </svg>`;
      }
  
      return svgContent;
    }
  }
  
  module.exports = LogoGenerator;
  