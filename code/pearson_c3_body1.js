/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
  cb(null, { form: context.body });
};