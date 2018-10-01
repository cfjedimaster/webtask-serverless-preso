let debugging = false;

function log(msg) {
  if(!debugging) return;
  console.log(msg);
}

/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
  debugging = context.meta.debugging;

  log('entered functions');
  let x = 1;
  let y = 2;
  let z = context.query.z || 9;
  log('current values for x,y,z: ' + x + ',' + ',' + y + ',' + z) ; 
  let result = x + y + z;
  log('result is ' + result);
  cb(null, { result: result });
};