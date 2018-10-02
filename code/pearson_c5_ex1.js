const rp = require('request-promise');

/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {

  let search = context.query.search;
  if(!search) return cb('search parameter required');
  
  let app_id = context.secrets.app_id;
  let app_key = context.secrets.app_key;
  
  rp({
    url:`https://api.edamam.com/search?q=${encodeURIComponent(search)}&app_id=${app_id}&app_key=${app_key}`,
    json:true
  }).then((result) => {
    let recipes = [];
    if(result.hits.length > 0) {
      result.hits.forEach(r => {
        recipes.push(
          {
            name: r.recipe.label,
            url: r.recipe.url,
            image: r.recipe.image,
            calories: r.recipe.calories
          }
        );
      });
    }
    cb(null, recipes);

  });
  
};