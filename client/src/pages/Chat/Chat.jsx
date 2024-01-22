import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import user from "../../plugins/user.js";
import RenderMessage from "../../components/Chat/Chat/RenderMessage.jsx";
import {InputFormText} from "../../layouts/forms/InputForms.jsx";
import Icon from "@mdi/react";
import { mdiSend } from '@mdi/js';
import socket from '../../plugins/socket.js';

function Chat() {
    const {id} = useParams();
    const [chat, setChat] = useState({
        user_id_1: [{}],
        user_id_2: [{}]
    });
    const [messages, setMessages] = useState([]);
    const [sendMessage, setSendMessage] = useState('');
    function getChat() {
        axios.get(`api/chat/${id}`)
            .then(response => {
                console.log(response.data);
                setChat(response.data.chat[0]);
                setMessages(response.data.messages)
            });
    }
    useEffect(() => {
        getChat();
        socket.emit('chat:connection_chat', id);
        socket.on('chat:update_messages', (new_messages) => setMessages(new_messages));
    }, []);

    function handlerInput(e) {
        setSendMessage(e.target.value);
    }
    function submit(e) {
        e.preventDefault();
        axios.post(`api/chat/sendMessage/${id}`, {
            message: sendMessage
        })
            .then(response => {
                if(response.data.success) {
                    socket.emit('chat:send_message', id);
                    setSendMessage('');
                }
            });
    }
    return (
        <>
            <div className={"border border-sky-600 m-1 flex justify-center"}>
                {chat.user_id_1 === user.id ? chat.user_id_2[0].name : chat.user_id_1[0].name}
            </div>
            <div className={"scroll-auto"}>
                {messages.map(message => <RenderMessage key={message.id} message={message}/>)}
            </div>
            <div className={"absolute bottom-1 p-1 w-full"}>
                <form onSubmit={submit}>
                    <InputFormText
                        placeholder={"Digite sua mensagem..."}
                        onChange={handlerInput}
                        type={"text"}
                        value={sendMessage}
                        childrenInInput={
                            <button type={"submit"} className={"bg-white"}>
                                <Icon path={mdiSend} size={1.5} />
                            </button>
                        }
                    />
                </form>
            </div>
        </>
    );
}

export default Chat;