const http = require("http");
const collection = ["", "", ""];
var count = 0;

for (var i = 0; i < 3; i++)
	get(i);

function get(index)
{
	http.get(process.argv[2 + index], response =>
	{
		response.setEncoding("utf8");
		response.on("data", data => collection[index] += data);
		response.on("end", () =>
		{
			if (++count == 3)
				collection.forEach(item => console.log(item));
		});
	});
}