export const replaceDotComma = (oldNumber: number) => {
	const newNumber = oldNumber.toFixed(2).toString().replace(".", ",");

	return newNumber;
};
