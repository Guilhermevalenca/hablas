import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import Swal from "sweetalert2";

function ProfilePage() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: ''
    });

    useEffect(() => {
        if(! localStorage.getItem('token')) {
            navigate('/login');
        }
        axios.get('api/user')
            .then(response => {
                setUserData({
                    name: response.data.name,
                    email: response.data.email
                });
            });
    }, []);

    function logout() {
        axios.post('api/logout')
            .then(response => {
                if(response.data.success) {
                    localStorage.removeItem('token');
                    document.dispatchEvent(new Event('isLogged'));
                    Swal.fire({
                        title: 'Você foi desconectado'
                    })
                        .finally(() => {
                            navigate('/login');
                        });
                }
            })
            .catch(error => console.log(error));
    }
    return (
        <>
            <h1>Dados do usuário</h1>
            <div className={"border border-blue-600 m-2"}>
                <ul className={"list-inside"}>
                    <strong>Nome:</strong>
                    <span>{userData.name ? userData.name : ' Carregando...'}</span>
                </ul>
                <ul className={"list-inside"}>
                    <strong>Email:</strong>
                    <span>{userData.email ? userData.email : ' Carregando...'}</span>
                </ul>
            </div>
            <button className={"rounded-lg bg-red-600 p-1 text-white"} onClick={logout}>Desconectar</button>
        </>
    );
}
export default ProfilePage;