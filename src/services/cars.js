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

	async getCar({ year, final_plate, brand, page, limit }) {
		const limitValue = Math.min(Math.max(parseInt(limit), 1), 10);
		const offset = (page - 1) * limitValue;

		const filters = {};
		if (year) filters.year = year;
		if (final_plate) filters.final_plate = final_plate;
		if (brand) filters.brand = brand;

		const { count, cars } = await carRepository.getCars({
			filters,
			limit: limitValue,
			offset,
		});
		const pages = Math.ceil(count / limitValue);

		return {
			count,
			pages,
			data: cars,
		};
	},

	async deleteCar(carId) {
		const carExists = await carRepository.findCarById(carId);
		if (!carExists) {
			return false;
		}

		await carRepository.deleteCarAndItems(carId);
		return true;
	},
};
