const capitalize = require('./capitalize');

test('capitalize "heya" to "Heya"', () => {
	expect(capitalize("heya")).toBe("Heya");
});