import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import user from "../../plugins/user.js";
import RenderMessage from "../../components/Chat/Chat/RenderMessage.jsx";
import {InputFormTextarea} from "../../layouts/forms/InputForms.jsx";
import Icon from "@mdi/react";
import { mdiSend } from '@mdi/js';
import socket from '../../plugins/socket.js';

function Chat() {
    const {id} = useParams();
    const contentRef = useRef();
    const [chat, setChat] = useState({
        user_id_1: [{name: ''}],
        user_id_2: [{name: ''}]
    });
    const [messages, setMessages] = useState([]);
    const [sendMessage, setSendMessage] = useState('');
    const [rows, setRows] = useState(1);

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

    useEffect(() => {
        contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }, [messages]);

    useEffect(() => {
        const newlineCount = (sendMessage.match(/\n/g) || []).length;
        if(newlineCount < 3) {
            setRows(newlineCount + 1);
        }
    }, [sendMessage]);

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
            <div className={"flex justify-center"}>
                <div className={"border border-sky-600 bg-sky-300 m-1 flex justify-center fixed top-16 w-80"}>
                    {chat.user_id_1 === user.id ? chat.user_id_2[0].name : chat.user_id_1[0].name}
                </div>
            </div>
            <div ref={contentRef} className="absolute w-full h-[32rem] overflow-y-auto top-24 border p-2">
                {messages.map(message => <RenderMessage key={message.id} message={message}/>)}
            </div>
            <div className={"p-1 absolute bottom-0 w-full"}>
                <form onSubmit={submit}>
                    <InputFormTextarea
                        placeholder={"Digite sua mensagem..."}
                        onChange={handlerInput}
                        type={"text"}
                        value={sendMessage}
                        rows={rows}
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