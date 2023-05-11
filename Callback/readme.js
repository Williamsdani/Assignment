const fs = require('fs');

const myFile = fs.readFile('./ample1.txt', 'utf8', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data);
    }
})