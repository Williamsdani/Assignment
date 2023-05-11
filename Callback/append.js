const fs = require('fs');
fs.appendFile('./ample1.txt', 'God is good', (error, data) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("data")
    }
})
// console.log('all the time')