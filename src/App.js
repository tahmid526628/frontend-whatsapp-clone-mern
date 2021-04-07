import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios/axios';

import './App.css';

import Sidebar from './components/sidebar/sidebar.component';
import Chat from './components/chat/chat.component';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data)
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
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />

        {/* chat */}
        <Chat messages={ messages } />
      </div>
    </div>
  );
}

export default App;
