var createError = require('http-errors')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var rootRouter = require('./routes/root/root')
var userRouter = require('./routes/user/user')

app.use(bodyParser.json())

app.use('/', rootRouter)
app.use('/user', userRouter)


//catch 404 and forward to error handler
app.use(function(req,res,next){next(createError(404))})

//error handler
app.use(function(err,req,res,next){
    res
    .status(err.status || 500)
    .json({
        success: false,
        content: err
    })
    .end()
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000:')
})
