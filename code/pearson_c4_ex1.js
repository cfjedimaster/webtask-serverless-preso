/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {

  // Ok, so first, check our input
  if(!context.query.score) return cb('Score is required.');

  let score = context.query.score;

  // fetch data
  context.storage.get((error, data) => {
    if(error) return cb(error); 

    if(!data) data = {games: 0, totalScore: 0};

    //new game
    data.games++;
    //more score
    data.totalScore += parseInt(score, 10);

    //now store
    context.storage.set(data, {force: 1}, (err) => {
          if(err) return cb(err);

          //generate result that includes total games and avg
          let result = {
            games: data.games,
            average: data.totalScore / data.games
          };

          cb(null, result);          
    });

  });

};