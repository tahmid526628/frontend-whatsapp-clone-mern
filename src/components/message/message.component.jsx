import React from 'react';

import './message.style.css';

const Message = ({ name, message, timeStamp, received }) => {
    return(
        <p className={`chat__message ${received ? "chat__reciever" :  ""}`}>
            <span className="chat__name">{name}</span>
            {message}
            <span className="chat__timestamp">
                {timeStamp}
            </span>
        </p>
    );
}

export default Message;