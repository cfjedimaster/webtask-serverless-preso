module.exports = function (context, req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html'});
	let name = context.query.name || 'Anonymous';
    res.end('<h1>Hello, '+name+'</h1>');
}