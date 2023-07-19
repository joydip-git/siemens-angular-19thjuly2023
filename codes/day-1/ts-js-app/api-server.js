var http = require('http')

var server = http.createServer(
    function (req, res) {
        res.end('welcome to api server')
    }
)
server.listen(4000, function () {
    console.log('server is running using port 4000')
})