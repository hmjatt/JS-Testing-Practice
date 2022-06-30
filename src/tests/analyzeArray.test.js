const analyzeArray = require('../functions/analyzeArray');

test(`analyzeArray [1,2,3,4,5] to be 
	{
		average: 3,
		length: 5,
		max: 5,
		min: 1
	}`, () => {
	expect(analyzeArray.returnedObject([1,2,3,4,5])).toStrictEqual(
	{
		average: 3,
		length: 5,
		max: 5,
		min: 1
	});
});
