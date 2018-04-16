const settings = {
    gcm:{
        id:null
    }
}
const PushNotifications = require('node-pushnotifications')
const push = new PushNotifications(settings)

const registrationId = 'MY_DEVICE_ID'

const data = {
    title: 'Test Push Notification',
    body: 'Powered by Node and am@rcs.de'
}

push.send(registrationId, data)
    .then((results) => {console.log(results)})
    .catch((err) => console.log(err))
