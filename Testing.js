// Function 1: Capitalize
function capitalize(str) {
    if (str.length === 0) return '';
    return str[0].toUpperCase() + str.slice(1);
}

// Function 2: Reverse String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function 3: Calculator object
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : "Cannot divide by zero"
};

// Helper function for Caesar Cipher
function shiftChar(char, shift) {
    const charCode = char.charCodeAt(0);
    const isUpperCase = char >= 'A' && char <= 'Z';
    const isLowerCase = char >= 'a' && char <= 'z';

    if (isUpperCase) {
        return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
    }
    if (isLowerCase) {
        return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
    }
    return char; // Non-alphabetic characters remain unchanged
}

// Function 4: Caesar Cipher
function caesarCipher(str, shift) {
    return str.split('').map(char => shiftChar(char, shift)).join('');
}

// Function 5: Analyze Array
function analyzeArray(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    const avg = sum / arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        average: avg,
        min: min,
        max: max,
        length: arr.length
    };
}
