var fs = require("fs")
var data = require("./data.json")

console.log(data)

File.read('/data.json', "utf-8",(err, data) => {
    console.log(data)
})