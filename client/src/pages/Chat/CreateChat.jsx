import InputFormText from "../../layouts/forms/InputFormText.jsx";
import {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import socket from "../../plugins/socket.js";

function CreateChat() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    function handlerInput(e) {
        const value = e.target.value;
        if(value.length === 1 || value.length % 3 === 0) {
            axios.post('api/chat/searchUsers', {
                name: e.target.value
            })
                .then(response => setUsers(response.data));
        }
    }
    function createChat(user_id) {
        Swal.fire({
            title: 'Aguarde, estamos iniciando a conversa',
            showConfirmButton: false,
            willOpen() {
                Swal.showLoading();
            },
            willClose() {
                Swal.hideLoading();
            },
            allowOutsideClick: false,
            allowEscapeKey: false
        });
        axios.post('api/chat', {
            user_id: user_id
        })
            .then(response => {
                if(response.data.success) {
                    socket.emit('chat:new_chat', user_id);
                    navigate(`/chat/${response.data.chat_id}`);
                }
            })
            .catch(error => console.log(error))
            .finally(Swal.close);
    }
    return (
        <>
            <InputFormText label={"Pesquise pelo nome do usuário"} typeInput={"text"} placeholder={"Digite..."} onChange={handlerInput} />
            {
                users.length === 0 ? <div>Nenhum usuário</div> :
                <table className={"m-2"}>
                    <thead>
                        <tr className={"border border-sky-500 text-center"}>
                            <td>Nome</td>
                            <td>Opções</td>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => {
                            return (
                                <tr key={user.id} className={"border border-sky-500"}>
                                    <td className={"p-4"}>
                                        {user.name}
                                    </td>
                                    <td className={"p-4"}>
                                        <button onClick={() => createChat(user.id)} className={'bg-sky-900 text-white p-1 rounded'}>Iniciar conversa</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            }
        </>
    );
}

export default CreateChat;