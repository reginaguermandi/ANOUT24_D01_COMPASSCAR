function validateItems(req, res, next) {
	const items = req.body;

	if (!Array.isArray(items) || items.length === 0) {
		return res.status(400).json({ errors: "items is required" });
	}

	if (items.length > 5) {
		return res.status(400).json({ errors: "items must be a maximum of 5" });
	}

	const uniqueItems = new Set(items);
	if (uniqueItems.size !== items.length) {
		return res.status(400).json({ errors: "items cannot be repeated" });
	}

	next();
}

module.exports = validateItems;
