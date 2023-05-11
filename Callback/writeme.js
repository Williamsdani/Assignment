const fs = require('fs');

const ebuka = fs.writeFile('./ample1.txt', 'God is good\n', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log("data")
    };
})