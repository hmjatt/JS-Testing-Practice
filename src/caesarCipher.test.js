const caesarCipher = require('./caesarCipher');

test('Crypt string "attack at dawn" to "haahjr ha khdu"', () => {
	expect(caesarCipher.crypt("attack at dawn", 7)).toBe("haahjr ha khdu");
});