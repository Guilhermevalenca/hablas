import {Outlet, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {ButtonCancel, ButtonSuccess} from "../../layouts/buttons/Buttons.jsx";
import {controller} from "../../plugins/axios.js";
// import {controller} from "../../plugins/axios.js";

function VerifyAuth() {
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('api/user')
            .then(response => {
                localStorage.setItem('user', JSON.stringify(response.data));
            })
            .catch(error => {
                if(error.response.status === 401) {

                    const reactSwal = withReactContent(Swal);

                    reactSwal.fire({
                        title: (
                            <>
                                <h1>Você não está mais autenticado, faça novamente o login para acessar essa pagina</h1>
                                <div>
                                    <ButtonCancel className={"mr-1"} onClick={() => navigate('/')}>
                                        Cancelar
                                    </ButtonCancel>
                                    <ButtonSuccess onClick={() => navigate('/login')}>
                                        Login
                                    </ButtonSuccess>
                                </div>
                            </>
                        ),
                        showConfirmButton: false,
                        allowOutsideClick: false,
                        allowEscapeKey: false
                    });

                }
            });
        return () => {
            //
        }
    }, []);

    return (
        <>
            <Outlet />
        </>
    );
}
export default VerifyAuth;