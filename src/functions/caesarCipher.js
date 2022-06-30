const caesarCipher = {

	re : /[a-zA-z]/,

	crypt(plainText, key) {
		let cryptedText = "";
		plainText = plainText.toLowerCase();
		for (let i = 0; i < plainText.length; i++) {
			if (this.re.test(plainText.charAt(i))) {
				cryptedText += String.fromCharCode((plainText.charCodeAt(i) - 97 + key) % 26 + 97);
			} else {
				cryptedText += plainText.charAt(i);
			}
		}
		return cryptedText;
	},

	decrypt(cipherText, key) {
		let decryptedText = "";
		cipherText = cipherText.toLowerCase();
		for (let i = 0; i < cipherText.length; i++) {
			if (this.re.test(cipherText.charAt(i))) {
				decryptedText += String.fromCharCode((cipherText.charCodeAt(i) - 97 + 26 - key) % 26 + 97);
			} else {
				decryptedText += cipherText.charAt(i);
			}
		}
		return decryptedText;
	},
 

};
module.exports = caesarCipher;