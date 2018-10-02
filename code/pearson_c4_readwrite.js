/**
* @param context {WebtaskContext}
*/
module.exports = function(context, cb) {

  context.storage.get((error, data) => {

    // initial data is blank
    if(!data) data = {hits: 0};

    // increment
    data.hits++;
    
    context.storage.set(data, (err) =>{
      if(err) return cb(err);
      cb(null, {totalRuns: data.hits});     
    });

  });
  
};