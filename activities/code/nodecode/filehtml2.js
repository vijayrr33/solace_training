const fs = require("fs");
const cheerio = require('cheerio')

fs.readFile('index.html', function (crr, data) {
    if (crr) return console.error(crr);
    const $ = cheerio.load(data);
    const bodyContent = $('body').html();
    console.log(bodyContent);
});

console.log("Program Ended");