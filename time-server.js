const net = require("net");

net.createServer(listener =>
{
	var now = new Date();

	listener.end(now.getFullYear() + "-" + format(now.getMonth() + 1) + "-" + format(now.getDate()) + " " + format(now.getHours()) + ":" + format(now.getMinutes()) + "\n");
}).listen(Number(process.argv[2]));

function format(number)
{
	return number < 9 ? "0" + number : number;
}