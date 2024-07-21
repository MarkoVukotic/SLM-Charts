// utils.js

export function randomNumbers({count, min, max}) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
      numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbers;
  }
  
  export function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  export function transparentize(color, opacity) {
    const alpha = Math.round(opacity * 255).toString(16).padStart(2, '0');
    return color + alpha;
  }
  
  export function countries({count}) {
    const monthNames = ['Germany', 'Austria', 'Italy', 'Denmark', 'Spain', 'Netherlands', 'Portugal', 'Belgium', 'France', 'Iceland', 'United Kingdom', 'All countries'];
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(monthNames[i % 12]);
    }
    return result;
  }
  