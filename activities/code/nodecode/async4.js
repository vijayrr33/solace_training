const async = require("async");

 

 

function square(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000);
    });
}

 

async function output(c, d, e) {
    const ans = await square(c, d, e);
    console.log(ans);
    console.log(e);
}

 

async function output1(x, y) {
    const ans1 = await square(x,y);
    console.log(ans1);
    // console.log(e);
}

 

output(10, 20, 20);
output1(45, 45)