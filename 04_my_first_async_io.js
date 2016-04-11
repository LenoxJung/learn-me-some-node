var fs = require('fs');
var filename = process.argv[2];
filename = fs.readFile(filename, function(err, data){
  console.log(data.toString().split('\n').length - 1);
});