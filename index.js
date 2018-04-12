var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.post('/event', function (request, response) {
    console.log('new body is', request.body)
    response.status(200).end()
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000:')
})
