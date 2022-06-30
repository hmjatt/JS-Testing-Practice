const calculator = require('./calculator');

test('add 1 + 2 to be 3', () => {
	expect(calculator.add(1, 2)).toBe(3);
});

test('subtract 2 - 1 to be 1', () => {
	expect(calculator.subtract(2, 1)).toBe(1);
});

test('multiply 2 * 2 to be 4', () => {
	expect(calculator.multiply(2, 2)).toBe(4);
});

test('subtract 4 / 2 to be 2', () => {
	expect(calculator.divide(4, 2)).toBe(2);
});

