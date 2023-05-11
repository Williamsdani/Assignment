const fs = require("fs")
fs.createReadStream("./williams.pdf").on("data", (chunk) => {

    console.log(chunk)
    console.log(chunk.toString())
})

