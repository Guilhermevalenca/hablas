import InputFormText from "../../layouts/forms/InputFormText.jsx";
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function CreateChat() {
    const [persons, setPersons] = useState([]);
    function handlerInput(e) {
        const value = e.target.value;
        if(value.length === 1 || value.length % 3 === 0) {
            axios.post('api/chat/searchPerson', {
                name: e.target.value
            })
                .then(response => setPersons(response.data));
        }
    }
    return (
        <>
            <InputFormText label={"Pesquise pelo nome do usuário"} typeInput={"text"} placeholder={"Digite..."} changeInput={handlerInput} />
            {
                persons.length === 0 ? <div>Nenhum usuário</div> :
                <table className={"m-2"}>
                    <thead>
                        <tr className={"border border-sky-500 text-center"}>
                            <td>Nome</td>
                            <td>Opções</td>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map(person => {
                            return (
                                <tr key={person.id} className={"border border-sky-500"}>
                                    <td className={"p-4"}>
                                        {person.name}
                                    </td>
                                    <td className={"p-4"}>
                                        <Link to={`/chat/${person.id}`} className={'bg-sky-900 text-white p-1 rounded'}>Iniciar conversa</Link>
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