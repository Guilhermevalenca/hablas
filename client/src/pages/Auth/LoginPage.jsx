import Icon from '@mdi/react';
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js';
import {useEffect, useState} from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate} from "react-router-dom";

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
    const [visiblePassword, setVisiblePassword] = useState(false);
    function ChangeVisiblePassword() {
        return (
            <>
                <button className={"bg-white border border-transparent flex items-center"} onClick={() => setVisiblePassword(!visiblePassword)}>
                    {visiblePassword ? <Icon path={mdiEyeOutline} size={1.5}/> : <Icon path={mdiEyeOffOutline} size={1.5} />}
                </button>
            </>
        );
    }
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

                    <div className={"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"}>
                        <div className={"sm:col-span-4"}>
                            <label className="text-center block text-2xl leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="flex rounded-md shadow-sm ring-1 mt-2">
                                <input type={"email"} name="email" placeholder="Digite seu email"
                                       className="flex-1 py-1.5 pl-1 placeholder:text-gray-400 border focus:border-blue-600 focus:shadow-blue" onChange={handlerInput}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={"mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"}>
                        <div className={"sm:col-span-4"}>
                            <label className="text-center block text-2xl leading-6 text-gray-900">
                                Senha
                            </label>
                            <div className="flex rounded-md shadow-sm ring-1 mt-2">
                                <input type={visiblePassword ? 'text' : "password"} name="password"
                                       placeholder="Digite seu email"
                                       className="flex-1 py-1.5 pl-1 placeholder:text-gray-400 border focus:border-blue-600 focus:shadow-blue" onChange={handlerInput}
                                />
                                <span className={"bg-white"}>
                                    <ChangeVisiblePassword/>
                                </span>
                            </div>
                            <button type={"button"} className={"underline text-blue-400"} onClick={() => navigate('/register')}>Criar conta</button>
                        </div>
                    </div>
                </div>
                <div className="mt-3 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Entrar
                    </button>
                </div>
            </form>
        </>
    );
}

export default LoginPage;