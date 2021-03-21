import React from 'react';

import './App.css';

import Sidebar from './components/sidebar/sidebar.component';
import Chat from './components/chat/chat.component';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* sidebar */}
        <Sidebar />

        {/* chat */}
        <Chat />
      </div>
    </div>
  );
}

export default App;
