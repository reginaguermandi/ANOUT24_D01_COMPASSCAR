const carRepository = require("../repository/cars");

module.exports = {
	async createCar(carData) {
		const newCar = await carRepository.insertCar(carData);
		return newCar;
	},
};
