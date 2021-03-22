import React from 'react'

import './chat.style.css';

import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon, MicOutlined } from '@material-ui/icons';

import Message from '../message/message.component';

function Chat() {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__header_info">
                    <h3>Room Name</h3>
                    <p>Last seen at ... ...</p>
                </div>
                <div className="chat__header_right">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <Message />
                <Message isReceiver={true} />
                <Message />
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input
                        placeholder="Type a message"
                        type="text" 
                    />
                    <button
                        type="submit"
                    >
                        Send
                    </button>
                </form>
                <MicOutlined />
            </div>
        </div>
    )
}

export default Chat
