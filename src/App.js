import React, { useEffect, useState } from 'react';
import './App.css';
import firebase from './firebase';

function App() {
  const [token, setToken] = useState(''); 

  useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token",data);
      setToken(data);
    })
  })

  return (
    <div className="App">
      <h1>Notifica-me</h1>
      <h3>mi token es</h3>
      <h3>{token}</h3>
    </div>
  );
}

export default App;
