const reverseString = require('../functions/reverseString');

test('Reverse string "flow" to "wolf"', () => {
	expect(reverseString("flow")).toBe("wolf");
});