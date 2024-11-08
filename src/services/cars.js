const carRepository = require("../repository/cars");
const maxYearLimit = require("../middleware/year_validation");
const plateFormat = require("../middleware/plate_validations");

module.exports = {
	async createCar(carData) {
		const errors = [];

		const existingCar = await carRepository.findPlate(carData.plate);
		if (existingCar) {
			return { errors: ["car already registered"] };
		}

		if (!carData.brand) errors.push("brand is required");
		if (!carData.model) errors.push("model is required");
		if (!carData.year) errors.push("year is required");
		if (!carData.plate) errors.push("plate is required");
		if (!maxYearLimit(carData.year))
			errors.push("year must be between 2015 and 2025");
		if (!plateFormat(carData.plate))
			errors.push("plate must be in the correct format ABC-1C34");

		if (errors.length > 0) {
			return { errors };
		}

		const newCar = await carRepository.insertCar(carData);
		return newCar;
	},

	async findCar(carId) {
		const car = await carRepository.findCarById(carId);

		if (car) {
			const items = await carRepository.carWithItems(carId);
			car.items = items.map((item) => item.name);
		}

		return car;
	},
};
