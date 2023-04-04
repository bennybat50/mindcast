const admin = require("firebase-admin");

//download sdk from firebase
const serviceAccount = require("./mongoro-8bd64-firebase-adminsdk-l2lth-b9799fe295.json");

//get db url too from firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


exports.firebaseNotification = (token, title, body, data) => {

    let payload = {
        data,
        notification: {
            title,
            body,
            "content-available": "1"
        }
    };

    const options = {
        priority: "high",
        timeToLive: 60 * 60 * 24,
    };
    admin
        .messaging()
        .sendToDevice(token, payload, options)
        .then((response) => {
            console.log("Successfully sent message:", response);
            return response
        })
        .catch((error) => {
            console.log("Error sending message:", error);
            return error
        });
}

exports.ticketID = () => {
    return "0012" + Math.floor(1000 + Math.random() * 9000)
}