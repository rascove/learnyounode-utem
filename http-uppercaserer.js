const http = require("http");

http.createServer((request, response) =>
{
	var data = "";

	request.on("data", chunk =>
	{
		if (request.method.toLowerCase() == "post")
			data += chunk;
	})

	request.on("end", () => response.end(data.toUpperCase()));
}).listen(Number(process.argv[2]));