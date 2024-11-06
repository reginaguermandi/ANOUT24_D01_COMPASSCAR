module.exports = function plateFormat(plate) {
	const regex = /^[A-Z]{3}-\d[A-J0-9]\d{2}$/;
	if (regex.test(plate)) {
		return true;
	} else {
		return false;
	}
};
