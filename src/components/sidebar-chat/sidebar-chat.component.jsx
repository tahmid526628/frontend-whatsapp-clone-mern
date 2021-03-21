import { Avatar } from '@material-ui/core';
import React from 'react';

import './sidebar-chat.style.css';


function SidebarChat() {
    return (
        <div className="sidebar_chat">
            <Avatar />
            <div className="sidebar_chat__info">
                <h2>Room Name</h2>
                <p>This is a message</p>
            </div>
        </div>
    )
}


export default SidebarChat;
