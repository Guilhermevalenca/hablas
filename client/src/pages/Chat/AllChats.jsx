import InputFormText from "../../layouts/forms/InputFormText.jsx";
import {useState} from 'react';
import {Link} from "react-router-dom";

function AllChats() {
    const [chats, SetChats] = useState([]);

    return (
        <>
            <div>
                <Link to="/createChat" className={"flex justify-center bg-sky-500 w-full text-white h-10 items-center"}>
                    Nova conversa
                </Link>
                <InputFormText placeholder={"Procurar conversa"} typeInput={"text"} className={"-mt-12"} />
            </div>
            <div className={"flex justify-center"}>
                <div className={"border border-sky-900 m-4 p-2"}>

                    {chats.map(chat => <div key={chat.id} />)}

                </div>
            </div>
        </>
    );
}

export default AllChats;