import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Notification from './firebaseNotifications/Notification'
import { requestForToken, fooToken } from './firebaseNotifications/firebase';

import { getMessaging, getToken } from "firebase/messaging";

function App() {
  const [token, setToken] = useState('');

    useEffect(()=>{
      getTokenApp();
  })
  // comentario 1 en develop para prueba de git
  // comentario 2 en develop para prueba de git
  // comentario 3 en develop para prueba de git
  function getTokenApp() {
    // Get registration token. Initially this makes a network call, once retrieved
    // subsequent calls to getToken will return from cache.
    const messaging = getMessaging();
    getToken(messaging, { vapidKey: 'BENCOO19TvsCqeofUWo31jmA9vRrEaoLBqf8gJsUin9XTlhlCwr3GAdVLeaE1aGfUlIP6fQvLy7OeJ_3R0wEKio' }).then((currentToken) => {
      if (currentToken) {
        // Send the token to your server and update the UI if necessary
        // ...
        setToken(currentToken);
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });
  }

  let foo = requestForToken();
  console.info('foo');
  console.info(foo);

  let bar = fooToken();
  console.info(bar);
  /*useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token",data);
      setToken(data);
    })
  })*/

  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <h1>Notifica-me v0.3</h1>
      <h3>mi token es</h3>
      <h3>{token}</h3>
      <Notification />
    </div>
  );
}

export default App;
