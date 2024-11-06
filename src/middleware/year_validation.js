module.exports = function maxYearLimit(carYear) {
	const currentYear = new Date().getFullYear();
	const nextYear = currentYear + 1;
	const minYear = nextYear - 10;
	const maxYear = nextYear;

	if (carYear >= minYear && carYear <= maxYear) {
		return true;
	} else {
		return false;
	}
};
