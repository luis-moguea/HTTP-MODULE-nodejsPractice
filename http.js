const http = require("http")
const server = http.createServer((req, res) => {
    if (req.url === "/"){
        res.write("Test succeeded")
        res.end()
    }
    if(req.url === "/api/hello"){
        res.write(JSON.stringify(["Test succeeded",1,2,3,"..."]))
        res.end()
    }
})

server.listen(2000)

console.log("Listening port 2000...")


















