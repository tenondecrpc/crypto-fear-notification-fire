# Send Firebase Cloud Messaging notifications for all users.

This sample demonstrates how to send a Firebase Cloud Messaging (FCM) notification from a http request.

## Functions Code

See file [functions/index.js](functions/index.js) for the code.

Sending the notification is done using the [Firebase Admin SDK](https://www.npmjs.com/package/firebase-admin). The Web client writes the individual device tokens to the firestore which the Function uses to send the notification.

The dependencies are listed in [functions/package.json](functions/package.json).

## Sample Database Structure

Users dowload app android/ios from the stores. If they successfully enable notifications the device token is saved into the datastore under `/users/$uid/token`.:

```
/functions-project-12345
    /users
        /Uid-12345
            displayName: "Cristian Paniagua"
            token: "1234567890"
            photoURL: "https://lh3.googleusercontent.com/..."

```

## POST http rules

The http request `/api/sendFearNotification` runs every 24 hours.

## Deploy and test

1.  Set up your Firebase project:
    1.  [Create a Firebase project](https://firebase.google.com/docs/web/setup/#create-firebase-project)
    1.  [Register your web app with Firebase](https://firebase.google.com/docs/web/setup/#register-app)
1.  Clone or download this repo and open the `fcm-notification` directory.
1.  You must have the Firebase CLI installed. If you don't have it install it with `npm install -g firebase-tools` and then configure it with `firebase login`.
1.  Configure the CLI locally by using `firebase use --add` and select your project in the list.
1.  Install dependencies locally by running: `cd functions; npm install; cd -`
1.  Deploy your project using `firebase deploy`
1.  Open android/ios application, in this way a notification will be sent to you.
