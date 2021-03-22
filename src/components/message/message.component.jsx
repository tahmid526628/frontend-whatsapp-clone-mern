import React from 'react';

import './message.style.css';

const Message = ({ isReceiver }) => {
    return(
        <p className={`chat__message ${isReceiver ? "chat__reciever" :  ""}`}>
            <span className="chat__name">Tahmid</span>
            This is a message
            <span className="chat__timestamp">
                {new Date().toUTCString()}
            </span>
        </p>
    );
}

export default Message;