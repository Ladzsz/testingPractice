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