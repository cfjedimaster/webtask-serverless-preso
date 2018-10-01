const  formidable = require('formidable');

module.exports = function (context, req, res) {

  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, files) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
    let html = `
<p>
Hello, ${fields.name}. I see you are <b>${fields.age}</b> years old.
</p>
<p>
Your description: ${fields.description}.
</p>
    `;
      res.end(html);
  });

}