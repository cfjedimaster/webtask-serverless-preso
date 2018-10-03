module.exports = extraLogginng() {

    return function logger(req, res, next) {
		logger2 = function(x) {
			console.log('super log!');
		}

		return next();
		/*
        const ctx = req.webtaskContext;

        if (ctx.secrets && ctx.secrets[AUTH_SECRET_NAME]) {
            const match = (ctx.headers['authorization'] || '')
                .trim()
                .match(/^bearer\s+(.+[^\s-])\s*$/i);

            if (match && match[1] === ctx.secrets[AUTH_SECRET_NAME]) {
                return next();
            }

            const error = new Error('Unauthenticated extensibility point');
            error.statusCode = 401;

            return next(error);
        }

        return next();
		*/
    };
}