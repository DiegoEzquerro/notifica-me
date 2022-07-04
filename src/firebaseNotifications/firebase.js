// Firebase Cloud Messaging Configuration File. 
// Read more at https://firebase.google.com/docs/cloud-messaging/js/client && https://firebase.google.com/docs/cloud-messaging/js/receive

import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

var firebaseConfig = {

  apiKey: "AIzaSyAiEX7rbTAukLeLPVwdg8w2TsmqXfc7YVw",
  authDomain: "notifica-me-2527c.firebaseapp.com",
  projectId: "notifica-me-2527c",
  storageBucket: "notifica-me-2527c.appspot.com",
  messagingSenderId: "846148581004",
  appId: "1:846148581004:web:2752f03de2a7d93371eda9"

};
//measurementId: `REPLACE_WITH_YOUR_FIREBASE_MESSAGING_MEASUREMENT_ID`,

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: 'BENCOO19TvsCqeofUWo31jmA9vRrEaoLBqf8gJsUin9XTlhlCwr3GAdVLeaE1aGfUlIP6fQvLy7OeJ_3R0wEKio' })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Perform any other neccessary action with the token
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
};

export async function fooToken() {
  let token = await getToken(messaging, { vapidKey: 'BENCOO19TvsCqeofUWo31jmA9vRrEaoLBqf8gJsUin9XTlhlCwr3GAdVLeaE1aGfUlIP6fQvLy7OeJ_3R0wEKio' });
  return token;
}

// Handle incoming messages. Called when:
// - a message is received while the app has focus
// - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
export const onMessageListener = () =>
  new Promise((resolve) => {    
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
