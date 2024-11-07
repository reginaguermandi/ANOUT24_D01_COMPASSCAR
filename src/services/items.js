const itemRepository = require("../repository/items");
const carRepository = require("../repository/cars");

module.exports = {
	async insertCarItems(carId, items) {
		const existingCar = await carRepository.findCarById(carId);
		if (existingCar) {
			const newItems = await itemRepository.insertItems(existingCar, items);
			console.log(newItems);
		} else {
			return { errors: ["car not found"] };
		}
	},
};
