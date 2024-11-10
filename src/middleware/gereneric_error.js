module.exports = {
	errorMiddleware(err, req, res, next) {
		res.status(500).json({
			errors: ["an internal server error occurred"],
		});
	},
};
