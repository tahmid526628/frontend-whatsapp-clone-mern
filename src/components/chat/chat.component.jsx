import React, { useRef, useEffect, useState } from 'react';
import axios from '../../axios/axios';

import './chat.style.css';

import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon, MicOutlined } from '@material-ui/icons';

import Message from '../message/message.component';

function Chat({ messages }) {
    const [input, setInput] = useState("");

    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages]);
    
    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: "Demo Name",
            timeStamp: "just now",
            received: false
        });

        setInput("");
    };

    

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
                {messages.map((message) => (
                    <Message message={message} key={message._id}/>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text" 
                    />
                    <button
                    onClick={sendMessage}
                        type="submit"
                        
                    >
                        Send
                    </button>
                </form>
                <IconButton>
                    <MicOutlined />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
