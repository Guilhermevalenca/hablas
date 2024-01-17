import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Swal from "sweetalert2";

function ProfilePage() {
    const navigate = useNavigate();
    useEffect(() => {
        if(! localStorage.getItem('token')) {
            navigate('/login');
        }
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
            <button className={"rounded-lg bg-red-600 p-1 text-white"} onClick={logout}>Desconectar</button>
        </>
    );
}
export default ProfilePage;