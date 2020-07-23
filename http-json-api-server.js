const http = require("http");

http.createServer((request, response) =>
{
	var endpoint = new URL(request.url, `http://${request.headers.host}`);
	var date = new Date(endpoint.searchParams.get("iso"));

	response.writeHead(200, {"Content-Type": "application/json"});

	if (endpoint.pathname == "/api/parsetime")
		response.end(JSON.stringify({hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}));
	else if (endpoint.pathname == "/api/unixtime")
		response.end(JSON.stringify({unixtime: date.getTime()}));	
}).listen(Number(process.argv[2]));