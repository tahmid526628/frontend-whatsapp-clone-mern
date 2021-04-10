import React from 'react';
import { useStateValue } from '../../contextAPI/StateProvider';

import './message.style.css';

const Message = ({ name, email, message, timeStamp }) => {
    const [{ user }, dispatch] = useStateValue();

    return(
        <p className={`chat__message ${email === user.email && "chat__reciever"}`}>
            <span className="chat__name">{name}</span>
            {message}
            <span className="chat__timestamp">
                {timeStamp}
            </span>
        </p>
    );
}

export default Message;