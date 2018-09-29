module.exports = function(cb) {

  try {
    let x = 10;
    let y = a;
    cb(null, { result: x / y });
  } catch(e) {
    cb(e);
  }
};