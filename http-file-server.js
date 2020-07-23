const http = require("http");
const fs = require("fs");

http.createServer((request, response) =>
{
	fs.createReadStream(process.argv[3]).pipe(response);
}).listen(Number(process.argv[2]));