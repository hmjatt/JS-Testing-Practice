const caesarCipher = require('../functions/caesarCipher');

test(`Crypt string "attack at dawn ABC.?,:;!''" to "haahjr ha khdu hij.?,:;!''"`, () => {
	expect(caesarCipher.crypt(`attack at dawn ABC.?,:;!''123`, 7)).toBe(`haahjr ha khdu hij.?,:;!''123`);
});

test(`Decrypt string "haahjr ha khdu HIJ.?,:;!''" to "attack at dawn abc.?,:;!''"`, () => {
	expect(caesarCipher.decrypt(`haahjr ha khdu HIJ.?,:;!''123`, 7)).toBe(`attack at dawn abc.?,:;!''123`);
});