import React, { useRef, useEffect, useState } from 'react';
import axios from '../../axios/axios';
import { useParams } from 'react-router-dom';

import './chat.style.css';

import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon, MicOutlined } from '@material-ui/icons';

import Message from '../message/message.component';
import { useStateValue } from '../../contextAPI/StateProvider';

function Chat({ rooms, messages }) {
    const [input, setInput] = useState("");
    const [roomName, setRoomName] = useState("");
    // const [roomMessages, setRoomMessages] = useState([]);
    const { roomId } = useParams();
    const [{ user }] = useStateValue();

    useEffect(() => {
        setRoomName(roomId ? rooms.map(room => (
            room._id === roomId ? room.roomName : null
        )) : (null)
        );
    }, [roomId, rooms]);

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
            name: user?.displayName,
            email: user?.email,
            timeStamp: new Date().toLocaleString(),
            received: true,
            roomId: roomId
        });

        setInput("");
    };    

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />
                <div className="chat__header_info">
                    <h3>{ roomName }</h3>
                    <p>
                        Last seen{" "}
                        {messages.filter(message => roomId === message.roomId)[messages.filter(message => roomId === message.roomId).length - 1]?.timeStamp}
                    </p>
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
                {messages.filter(message => roomId === message.roomId)
                .map((message) => (
                    <Message key={message._id} {...message}  />
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
