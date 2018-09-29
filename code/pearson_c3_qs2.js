/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {
  let name = context.query.name;
  let age = context.query.age;

  if(!name || !age || isNaN(age)) {
    cb('You must pass name, age, and age must be numeric!');
  } else {
    cb(null, { description: `You are ${name} and you are ${age} years old.` });
  }
};