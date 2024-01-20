import {useState} from "react";
import InputFormText from "../../layouts/forms/InputFormText.jsx";
import InputFormPassword from "../../layouts/forms/InputFormPassword.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


function RegisterPage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [confirmPassword, setConfirmPassword] = useState({
        status: false,
        message: null
    });
    const [messagesErrors, setMessagesErrors] = useState({
        name: null,
        email: null,
        password: null
    });
    function handlerInput(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    function verifyPassword(e) {
        if(formData.password === e.target.value) {
            setConfirmPassword({
                status: true,
                message: 'Senhas iguais'
            });
            setFormData({
                ...formData,
                password_confirmation: e.target.value
            });
        } else {
            setConfirmPassword({
                status: false,
                message: 'Senhas diferentes'
            });
        }
    }
    function submit(e) {
        e.preventDefault();
        axios.post('api/register', formData)
            .then(response => {
                if(response.data.success) {

                    localStorage.setItem('token', response.data.token);
                    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
                    axios.defaults.withCredentials = true;

                    document.dispatchEvent(new Event('isLogged'));

                    Swal.fire({
                        title: 'Sua conta foi criada com sucesso!'
                    })
                        .finally(() => {
                            navigate('/')
                        });

                }
            })
            .catch(error => {
                if(error.response.data.errors) {
                    setMessagesErrors(error.response.data.errors);
                }
            });
    }
    return (
        <>
            <h1>Registrar conta</h1>
            <form onSubmit={submit}>
                <div className={"space-y-12 ml-4 mr-4"}>

                    <InputFormText label={"Nome"} onChange={handlerInput} name={"name"}
                                   placeholder={"Digite seu nome"} typeInput={"text"}>
                        <div className={messagesErrors.name ? 'text-red-600' : ''}>
                            {messagesErrors.name}
                        </div>
                    </InputFormText>

                    <InputFormText label={"Email"} onChange={handlerInput} name={"email"}
                                   placeholder={"Digite seu email"} typeInput={"email"}>
                        <div className={messagesErrors.email ? 'text-red-600' : ''}>
                            {messagesErrors.email}
                        </div>
                    </InputFormText>

                    <InputFormPassword label={'Senha'} onChange={handlerInput} name={"password"}
                                       placeholder={"Digite sua senha"} isVisiblePassOpen={true}>
                        <div className={messagesErrors.password ? 'text-red-600' : ''}>
                            {messagesErrors.password}
                        </div>
                    </InputFormPassword>

                    <InputFormPassword label={'Confirme sua senha'} onChange={verifyPassword}
                                       placeholder={"Digite sua senha"} isVisiblePassOpen={true}>
                        {confirmPassword.message ? <div
                            className={confirmPassword.status ? 'text-green-600' : 'text-red-600'}>{confirmPassword.message}</div> : ''}
                    </InputFormPassword>

                </div>
                <div className="mt-3 flex items-center justify-end gap-x-6">
                    <button onClick={() => navigate('/login')} type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-2"
                    >
                        Criar conta
                    </button>
                </div>
            </form>
        </>
    );
}

export default RegisterPage;