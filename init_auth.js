var admin = require('firebase-admin');

var serviceAccount = require('banem-a2ae6-firebase-adminsdk-gjgig-0f3b5cb34b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});
