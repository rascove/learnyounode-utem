module.exports = function (name, extension, callback)
{
	const fs = require("fs");

	fs.readdir(name, (error, list) =>
	{
		if (error)
			return callback(error);

		var array = [];

		list.forEach(file =>
		{
			if (file.endsWith("." + extension))
				array.push(file);
		});
			

		return callback(null, array);
	});
}