const reverseString = require('./reverseString');

test('Reverse string "flow" to "wolf"', () => {
	expect(reverseString("flow")).toBe("wolf");
});