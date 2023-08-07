const fs = require("fs");
fs.readFile("users1.json", function (crr, data) {
    if (crr) throw err;
    const users = JSON.parse(data);
    console.log(users);
});
