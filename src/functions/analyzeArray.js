const analyzeArray = {

	averageOfArray(inputArray) {
		const sum = inputArray.reduce((a, b) => a + b, 0);
		const avg = (sum / inputArray.length) || 0;
		return avg;
	},

	minimum(inputArray) {
		return Math.min(...inputArray);
	},

	maximum(inputArray) {
		return Math.max(...inputArray);
	},

	lengthOfArray(inputArray) {
		return inputArray.length;
	},

	returnedObject(inputArray) {
		let averageOfArray = this.averageOfArray(inputArray);
		let minimum = this.minimum(inputArray);
		let maximum = this.maximum(inputArray);
		let lengthOfArray = this.lengthOfArray(inputArray);
		return {average: averageOfArray, min: minimum, max: maximum, length: lengthOfArray};
	}

};

module.exports = analyzeArray;