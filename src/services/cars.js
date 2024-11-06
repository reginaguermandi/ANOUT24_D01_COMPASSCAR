const carRepository = require("../repository/cars");
const ValidationError = require("../middleware/post_entry_validation");
const maxYearLimit = require("../middleware/year_validation");

module.exports = {
	async createCar(carData) {
		if (!carData.brand) throw new ValidationError("brand is required");
		if (!carData.model) throw new ValidationError("model is required");
		if (!carData.year) throw new ValidationError("year is required");
		if (!carData.plate) throw new ValidationError("plate is required");
		if (!maxYearLimit(carData.year))
			throw new ValidationError("year must be between 2015 and 2025");

		const newCar = await carRepository.insertCar(carData);
		return newCar;
	},
};
