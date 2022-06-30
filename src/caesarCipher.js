const caesarCipher = {

	re : /[a-z]/,

	crypt(plaintext, key) {
		let ciphertext = "";
		for (let i = 0; i < plaintext.length; i++) {
			if (this.re.test(plaintext.charAt(i))) ciphertext += String.fromCharCode((plaintext.charCodeAt(i) - 97 + key) % 26 + 97);
			else ciphertext += plaintext.charAt(i);
		}
		return ciphertext;
	},
 

};
module.exports = caesarCipher;