import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import './sidebar-chat.style.css';

import axios from '../../axios/axios';

function SidebarChat({ parentCallBack, addNewChat, _id, roomName, lastMessage }) {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);
    
    

    const createChat = () => {
        const roomName = prompt("Enter room name for chat: ");

        if (roomName) {
            // do something cool in database
            const room = {
                roomName: roomName,
                createdTime: new Date().toLocaleString(),
                lastMessage: "",
                roomImage: "demo room image"
            }
            console.log(room)
            axios.post("/rooms/create", room).then(() => {
                console.log("room created");
                parentCallBack(room);
            }).catch(() => {
                console.log("Something wrong");
            })
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${_id}`}>
            <div className="sidebar_chat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebar_chat__info">
                    <h2>{roomName}</h2>
                    <p>{lastMessage}</p>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={ createChat } className="sidebar_chat">
            <h2>Add New Chat</h2>
        </div>
    )
}


export default SidebarChat;
