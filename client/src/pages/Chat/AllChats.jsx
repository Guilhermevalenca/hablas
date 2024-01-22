import InputFormText from "../../layouts/forms/InputFormText.jsx";
import {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import user from '../../plugins/user.js';
import RenderChat from "../../components/Chat/AllChats/RenderChat.jsx";
import socket from "../../plugins/socket.js";

function AllChats() {
    const [chats, setChats] = useState([]);
    function getChats() {
        axios.get('api/chat')
            .then(response => {
                console.log(response.data);
                setChats(response.data);
            })
            .catch(error => console.log(error));
    }
    useEffect(() => {
        getChats();
        socket.on('chat:created_new_chat', user_id => {
            if(user_id === user.id) {
                getChats();
            }
        });
    }, []);
    return (
        <>
            <div>
                <Link to="/createChat" className={"flex justify-center bg-sky-500 w-full text-white h-10 items-center"}>
                    Nova conversa
                </Link>
                <InputFormText placeholder={"Procurar conversa"} typeInput={"text"} className={"-mt-8"} />
            </div>
            <div>
                <div className={"border border-sky-900 m-4 p-2"}>

                    {chats.map(chat =>
                        <div key={chat.id} className={"p-1"}>
                            {
                                chat.user_id_1[0].id === user.id ? <RenderChat user={chat.user_id_2[0]} chat={chat.id} /> :
                                    chat.user_id_2[0].id === user.id ? <RenderChat user={chat.user_id_1[0]} chat={chat.id} /> : ''
                            }
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}

export default AllChats;