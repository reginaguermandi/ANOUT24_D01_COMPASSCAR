const maxYearLimit = require("./year_validation");
const plateFormat = require("./plate_validations");

function validateCarUpdate(req, res, next) {
	const { brand, model, year, plate } = req.body;
	const errors = [];

	if (brand && !model) {
		errors.push("model must also be informed");
	}

	if (year && !maxYearLimit(year)) {
		errors.push("year must be between 2015 and 2025");
	}

	if (plate && !plateFormat(plate)) {
		errors.push("plate must be in the correct format ABC-1C34");
	}
	if (errors.length > 0) {
		return res.status(400).json({ errors });
	}

	next();
}

module.exports = validateCarUpdate;
