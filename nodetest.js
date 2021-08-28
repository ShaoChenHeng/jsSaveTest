var m = 10;
var n = 1;
function add(x, y){
	return x +y;
}
console.log(m+" + "+n+" = "+add(m, n))
var fs = require("fs");

fs.writeFile('./b.txt', 'hello world!', 'utf-8', (err) => {
	if (err) {
		throw err;
		console.log("write data error..." + err);
	}else {
		console.log("successfully write data!");
	}
})

fs.appendFile('./test.text', 'here!', 'utf-8', err => {
	console.log('done')
})

fs.readFile('./b.txt', 'utf-8', (err, data) => {
	if (err) {
		throw err;
		console.log("read data error");
	} else {
		console.log(data);
	}
})
