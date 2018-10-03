module.exports = function() {

	return function (req, res, next) {
		console.log('middleware running');
		return next();
	};

}
