import React from 'react';

import './message.style.css';

const Message = ({ message }) => {
    return(
        <p className={`chat__message ${message.received ? "chat__reciever" :  ""}`}>
            <span className="chat__name">{message.name}</span>
            {message.message}
            <span className="chat__timestamp">
                {message.timeStamp}
            </span>
        </p>
    );
}

export default Message;