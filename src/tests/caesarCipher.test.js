const caesarCipher = require('../functions/caesarCipher');

test('Crypt string "attack at dawn" to "haahjr ha khdu"', () => {
	expect(caesarCipher.crypt("attack at dawn", 7)).toBe("haahjr ha khdu");
});

test('Decrypt string "haahjr ha khdu" to "attack at dawn"', () => {
	expect(caesarCipher.decrypt("haahjr ha khdu", 7)).toBe("attack at dawn");
});