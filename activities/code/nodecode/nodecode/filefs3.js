var fs = require("fs");
fs.readFile('node1.txt', function (crr, data) {
    if (crr) return console.error(crr);
    console.log(data.toString());
});

console.log("Program Ended");