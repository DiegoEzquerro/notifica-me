// This a service worker file for receiving push notifitications.
// See `Access registration token section` @ https://firebase.google.com/docs/cloud-messaging/js/client#retrieve-the-current-registration-token

// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');


// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAiEX7rbTAukLeLPVwdg8w2TsmqXfc7YVw",
  authDomain: "notifica-me-2527c.firebaseapp.com",
  projectId: "notifica-me-2527c",
  storageBucket: "notifica-me-2527c.appspot.com",
  messagingSenderId: "846148581004",
  appId: "1:846148581004:web:2752f03de2a7d93371eda9"
};


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  console.log('url ', payload.data['url']);
  //window.open(payload.data['url']);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);


  // https://stackoverflow.com/questions/39418545/chrome-push-notification-how-to-open-url-adress-after-click
  self.addEventListener('notificationclick', function (event) {
  //self.addEventListener('push', function (event) {
    console.info('--> notificationclick');
    console.info(event);

    event.notification.close();

    console.info("payload.data['url']", payload.data['url']);
    //return clients.openWindow(payload.data['url']);
    //return clients.openWindow('http://localhost:3000/consumption-alert');
    return clients.openWindow('https://notifica-me.vercel.app/consumption-alert');
  });
});
