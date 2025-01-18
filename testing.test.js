//captialize function
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//reverse function
function reverseString(str) {
    
    var splitString = str.split(""); 

    var reverseArray = splitString.reverse(); 

    var joinArray = reverseArray.join(""); 

    return joinArray; 
}

//calculator object
const calculator = {
    add: function (num1, num2) {
        return num1 + num2;
    },
    subtract: function (num1, num2) {
        return num1 - num2;
    },
    multiply: function (num1, num2) {
        return num1 * num2;
    },
    divide: function (num1, num2) {
        // Handle division by zero
        if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
        }
        return num1 / num2;
    },
};

//ceasar cipher function
function caesarCipher(str, shift) {
    // Handle shifts larger than 26 or negative shifts
    const normalizedShift = ((shift % 26) + 26) % 26;

    return str
        .split('')
        .map(char => {
            // Check if the character is a letter
            if (char.match(/[a-z]/i)) {
                const isUpperCase = char === char.toUpperCase();
                const base = isUpperCase ? 65 : 97; // ASCII codes for 'A' and 'a'
                // Shift the character and wrap around using modulo
                const newChar = String.fromCharCode(
                    ((char.charCodeAt(0) - base + normalizedShift) % 26) + base
                );
                return newChar;
            }
            // Non-alphabetic characters remain unchanged
            return char;
        })
    .join('');
}

//anaylze array function
function analyzeArray(arr) {
    let sum = 0;
    let average = 0;
    let length = 0;
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    //for loop to read the arraty
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        average = sum / arr.length;
        length = arr.length;
    }

    return object = {
        Sum: sum,
        Average: average,
        Length: length,
        Min: min,
        Max: max
    }
}

//capital test
test('captialize the first letter in any string', () => {
    expect(capitalize('fish')).toBe('Fish');
});

//reverse test
test('reverse any string', () => {
    expect(reverseString('fish')).toBe('hsif');
});

//calculator tests

//add
test("should add two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-2, -3)).toBe(-5);
});

//subtract
test("should subtract two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(3, 5)).toBe(-2);
});

//multiply
test("should multiply two numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
});

//divide
test("should divide two numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(5, 2)).toBeCloseTo(2.5); // Use toBeCloseTo for floats
});

//divide by zero
test("should divide two numbers", () => {
    expect(calculator.divide(6, 0)).toBe("Error: Division by zero is not allowed.");
});

//test for ceasar cipher
test("should shift the string by 3", () => {
    expect(caesarCipher('Hello', 3)).toBe("Khoor");
});

//test for analyze array
test("Should return an object with proper values", () => {
    const exampleArray = [1, 3, 5, 7, 9];
    const expectedOutput = {
        Sum: 25,
        Average: 5,
        Length: 5,
        Min: 1,
        Max: 9,
    };
    expect(analyzeArray(exampleArray)).toStrictEqual(expectedOutput);
});