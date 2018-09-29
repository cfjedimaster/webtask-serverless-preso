/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
  cb(null, { querystring: context.query });
};