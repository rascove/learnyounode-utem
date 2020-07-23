const mymodule = require("./mymodule");

mymodule(process.argv[2], process.argv[3], (error, data) =>
{
	for (var i = 0; i < data.length; i++)
		console.log(data[i]);
});