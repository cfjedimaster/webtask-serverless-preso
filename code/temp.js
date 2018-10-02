module.exports = function(context, cb) {

	context.storage.get(function (error, data) {
		if (error) return cb(error);
		cb(null, data);
	});

}