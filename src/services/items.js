const itemRepository = require("../repository/items");
const carRepository = require("../repository/cars");

module.exports = {
	validateItems(items) {
		const errors = [];
		const maxLimit = 5;
		const itemsChecked = [];

		if (!items || items.length === 0) {
			errors.push("items is required");
		} else {
			for (const item of items) {
				if (itemsChecked.includes(item)) {
					errors.push("items cannot be repeated");
					break;
				}
				itemsChecked.push(item);
			}

			if (items.length > maxLimit) {
				errors.push("items must be a maximum of 5");
			}
		}
		return errors;
	},
};
