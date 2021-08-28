function myfun(a, b) {
	return a * b;
	}
var a = myfun(1, 3);
console.log(a)

function funSave() {
var id = 'number1';
var name = 'hello'
var str = '{mydata:[' + '{id:' + id + ',name:' + name + '}' + ']}';
str = "{MyData:[{id:'" + id + "',name:'" + name + "'}]}";
//var json = eval('(' + str + ')');
var fso, tf;
try{
fso = new ActiveXObject("Scripting.FileSystemObject");
      tf = fso.CreateTextFile("test.json", true);
      tf.WriteLine(str);
}catch(err){
      }finally{
      tf.Close();
      }
}


function funSearch() {
var fso, ts, s;
var ForReading = 1;
try{
fso = new ActiveXObject("Scripting.FileSystemObject");
      ts = fso.OpenTextFile("test.json", ForReading);
      s = ts.ReadLine();
      var json = eval('(' + s + ')');
      alert(json.MyData[0].id);
}catch(err){
}finally{
ts.Close();
}
}
import fs from 'fs';
const fs = require('fs');

// create a JSON object
const user = {
    "id": 1,
    "name": "John Doe",
    "age": 22
};

// convert JSON object to string
const data = JSON.stringify(user);

// write JSON string to a file
fs.writeFile('user.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});


