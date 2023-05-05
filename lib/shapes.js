class Shape {
    /** @type {string} - Logo text. */
    text = '';
    /** @type {string} - Text color (white) or hexadecimal (#000000). */
    textColor = 'white';
    /** @type {string} - Shape color (white) or hexadecimal (#000000). */
    shapeColor = 'black';

    svg(shape) {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    ${shape}
    <text x="8" y="8" fill="${this.textColor}">${this.text}</text>
  </svg>`;
    }

    setText(word) {
        this.text = word;
    }

    setTextColor(color) {
        this.textColor = color;
    }

    setShapeColor(color) {
        this.shapeColor = color;
    }

    constructor() { }
}

class Circle extends Shape {
    render() {
        return this.svg(`<circle cx="8" cy="8" r="3" fill="${this.shapeColor}" />`);
    }

    constructor() { }
}

class Square extends Shape {
    render() {
        return `${this.shapeColor} square`;
    }

    constructor() { }
}

class Triangle extends Shape {
    render() {
        return `${this.shapeColor} triangle`;
    }

    constructor() { }
}

// Ask user which shape they want
let shape;

switch (userResponse) {
    case 'circle':
        shape = new Circle();
        break;
    case 'square':
        shape = new Square();
        break;
    case 'triangle':
        shape = new Triangle();
        break;
}

// `shape` will be an instance of the given shape

// Ask user which shape color they want
shape.setShapeColor(userResponse);

// Ask user what text they want
shape.setText(userResponse);

// Ask user which text color they want
shape.setTextColor(userResponse);

// Render the image
shape.render();
  // => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  // =>   <circle cx="8" cy="8" r="3" fill="black" />
  // =>   <text x="8" y="8" fill="white">SVG</text>
  // => </svg>