import React, { useEffect, useState } from 'react'

import './sidebar.style.css';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutline from '@material-ui/icons/SearchOutlined';
import {Avatar, IconButton} from '@material-ui/core';

import SidebarChat from '../sidebar-chat/sidebar-chat.component';
import axios from '../../axios/axios';
import { useStateValue } from '../../contextAPI/StateProvider';

function Sidebar({ messages }) {
    const [rooms, setRooms] = useState([]);
    const [{ user }] = useStateValue();

    useEffect(() => {
        // retrieving rooms from database
        axios.get("/rooms/sync").then((response) => {
            setRooms(response.data)
        });
    }, []);

    const handleCallBack = (childData) => {
        setRooms([...rooms, childData]);
    }

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL} />
                <div className="sidebar__header__right">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__search__container">
                    <SearchOutline />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat parentCallBack={handleCallBack} /> {/* this is add new chat button */}
                {rooms.map((room) => 
                    <SidebarChat key={room._id} messages={messages} {...room} />
                )}
                {/* <SidebarChat isLogout parentCallBack={handleCallBack} /> this is add new chat button */}
            </div>
        </div>
    )
}

export default Sidebar
