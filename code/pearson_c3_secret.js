/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
  if(context.secrets.friendly) {
    cb(null, { hello: context.query.name || 'Anonymous' });
  } else {
    cb(null, { goaway: context.query.name || 'Anonymous' });
  }
};