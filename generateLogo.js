// const svg = require('@svgdotjs/svg.js')
class LogoGenerator {
    constructor(text,text_color,shape_color,shape) {
        this.text = text; 
        this.shape_color = shape_color;
        this.text_color = text_color;
        this.shape = shape;
    }

generateLogo() {
    let svgContent;
if (this.shape === 'circle'){

    const svgContent =`<svg width="100" height="100">
    <rect width="100%" height="100%" fill="${this.color}" />
    <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="white" font-size="16">${this.text}</text>
  </svg>`
}
 else if (this.shape === 'square') {
    svgContent = `<svg width="100" height="100">
      <rect width="100%" height="100%" fill="${this.shapeColor}" />
      <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="${this.textColor}" font-size="16">${this.text}</text>
    </svg>`;
  } else if (this.shape === 'triangle') {
    svgContent = `<svg width="100" height="100">
      <polygon points="50%,0 0,100% 100%,100%" fill="${this.shapeColor}" />
      <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="${this.textColor}" font-size="16">${this.text}</text>
    </svg>`;
  } else {
    // Default to a square if the shape is not recognized
    svgContent = `<svg width="100" height="100">
      <rect width="100%" height="100%" fill="${this.shapeColor}" />
      <text x="50%" y="50%" text-anchor="middle" dy="0.3em" fill="${this.textColor}" font-size="16">${this.text}</text>
    </svg>`;
  } 
  return svgContent;
}    
}
module.exports = LogoGenerator;