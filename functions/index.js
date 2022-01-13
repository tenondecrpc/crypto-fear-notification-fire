'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


exports.sendFearNotification = functions.https.onRequest((req, res) => {
  if (req.method === 'POST') {
    // GET all users from firestore collection
    admin.firestore()
      .collection('users')
      .get()
      .then(async users => {
        // Listing all tokens as an array.
        let tokens = [];
        users.docs.map(user => {
          tokens.push(user.data().token);
          // console.info('user', user.data().token);
        });
        // Notification details.
        const payload = {
          notification: {
            title: 'It is time for buy or sell!',
            body: `Take advantage of the market situation.`,
            // icon: follower.photoURL
          }
        };
        // Send notifications to all tokens.
        await admin.messaging().sendToDevice(tokens, payload);
        res.json(tokens);
      });
  }
});
