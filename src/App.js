import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios/axios';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Sidebar from './components/sidebar/sidebar.component';
import Chat from './components/chat/chat.component';
import Login from './components/login/login.component';

function App() {
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data)
    });
  }, []);

  useEffect(() => {
    axios.get("/rooms/sync").then((response) => {
      setRooms(response.data)
    });
  }, []);

  useEffect(() => {
    // run once (e.g. listening something)
    // when something inserted in pusher
    const pusher = new Pusher('ef58f716c05b59e89841', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
      // set messages as all messages with new messages
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
      // as we subscribe before
    };
  }, [messages]);

  console.log(messages);
  
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
        {/* sidebar */}
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <h1>Hello world</h1>
          </Route>
          <Route path="/rooms/:roomId">
            {/* chat */}
            <Chat rooms={ rooms } messages={ messages } />
          </Route>
        </Switch>
      </div>
      )}
    </div>
  );
}

export default App;
