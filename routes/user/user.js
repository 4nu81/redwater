var express = require('express')
var router = express.Router()

router.get( '/', (request, response) => {
    response
    .status(200)
    .json({
        success: true,
        content: {
            name: 'User',
            title: 'Sir',
            location: 'Southpole'
        }
    })
    .end()
})

module.exports = router;
