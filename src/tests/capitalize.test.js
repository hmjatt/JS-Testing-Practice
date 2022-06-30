const capitalize = require('../functions/capitalize');

test('capitalize "heya!" to "Heya!"', () => {
	expect(capitalize("heya!")).toBe("Heya!");
});