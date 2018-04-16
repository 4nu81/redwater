var express = require('express')
var router = express.Router()

router.get( '/', (request, response) => {
    response
    .status(200)
    .json({
        success: true,
        content: {
            method: 'GET',
            content: 'any'
        }
    })
    .end()
})

router.post('/', (request, response) => {
    response
    .status(200)
    .json({
        success: true,
        content: {
            hello:'back',
            former:request.body
        }
    })
    .end()
})

module.exports = router;
