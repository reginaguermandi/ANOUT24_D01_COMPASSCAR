const itemRepository = require("../repository/items");
const carRepository = require("../repository/cars");

module.exports = {
	async insertCarItems(carId, items) {
		const existingCar = await carRepository.findCarById(carId);

		if (existingCar) {
			await itemRepository.deleteItemsByCarId(carId);

			const itemsToInsert = items.map((item) => ({
				name: item,
				car_id: carId,
			}));

			const newItems = await itemRepository.insertItems(itemsToInsert);

			return newItems;
		} else {
			return { errors: ["car not found"] };
		}
	},
};
