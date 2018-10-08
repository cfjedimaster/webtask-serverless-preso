/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
  cb(null, { headers: context.headers });
};