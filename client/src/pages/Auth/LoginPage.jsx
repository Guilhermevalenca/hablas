import {useEffect, useState} from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate} from "react-router-dom";
import InputFormText from "../../layouts/forms/InputFormText.jsx";
import InputFormPassword from "../../layouts/forms/InputFormPassword.jsx";
import {ButtonCancel, ButtonSuccess} from "../../layouts/buttons/Buttons.jsx";

function LoginPage() {
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate('/profile');
        }
    }, []);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    function handlerInput(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    function submit(e) {
        e.preventDefault();
        axios.post('api/login', formData)
            .then(response => {
                if(response.data.success) {

                    localStorage.setItem('token', response.data.token);
                    axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
                    axios.defaults.withCredentials = true;

                    document.dispatchEvent(new Event('isLogged'));

                    Swal.fire({
                        title: 'Autenticado com sucesso!'
                    })
                        .then(v => {
                            if(v.isConfirmed) {
                                navigate('/');
                            }
                        })
                }
            })
            .catch(error => console.log(error));
    }
    return (
        <>
            <form onSubmit={submit}>
                <div className={"space-y-12 ml-4 mr-4"}>

                    <InputFormText label={"Email"} onChange={handlerInput} name={"email"}
                                   placeholder={"Digite seu email"} typeInput={"email"} />

                    <InputFormPassword label={'Senha'} placeholder={"Digite sua senha"} name={"password"} onChange={handlerInput} isVisiblePassOpen={true}>
                        <button type={"button"} className={"underline text-blue-400"}
                                onClick={() => navigate('/register')}>Criar conta
                        </button>
                    </InputFormPassword>

                </div>
                <div className="mt-3 flex items-center justify-end gap-x-6">
                    <ButtonCancel type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancelar
                    </ButtonCancel>
                    <ButtonSuccess typeButton={"submit"} className={"mr-2"} >Entrar</ButtonSuccess>
                </div>
            </form>
        </>
    );
}

export default LoginPage;