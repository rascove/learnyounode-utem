const http = require("http");
var collection = "";

http.get(process.argv[2], response =>
{
	response.setEncoding("utf8");
	response.on("data", data => collection += data);
	response.on("end", () =>
	{
		console.log(collection.length);
		console.log(collection);
	});
});