const fs = require('fs').promises;


fs.writeFile("./williams.html", "God is the greatest",)
    .then(() => {
        console.log("all the time")
        // console.log('status: 200')
    })
    .catch((e) => {
        console.log(e);
    })


    // const fs = require("fs").promises;
// fs.writeFile("./williams.html", "God is the greatest")
//     .then(() => {
//         console.log("great work")
//     })
//     .catch((err) => {
//         console.log(err)
//     })