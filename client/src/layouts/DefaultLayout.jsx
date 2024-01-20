import Icon from "@mdi/react";
import {mdiAccount, mdiForum, mdiMenu, mdiChat} from "@mdi/js";
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from 'react';
import Swal from "sweetalert2";

function DefaultLayout() {
    const [isLogged, setIsLogged] = useState(localStorage.getItem('token') ? true : false);
    document.addEventListener('isLogged', () => {
        setIsLogged(localStorage.getItem('token') ? true : false);
    });
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        Swal.close();
    }, [location])
    return (
        <>
            <nav className={"flex justify-between bg-sky-900 text-white"}>
                <div className={"flex items-center"}>
                    <button>
                        <Icon path={mdiMenu} size={2}  />
                    </button>
                </div>
                <div className={"flex items-center ml-2"}>
                    <h1 onClick={() => navigate('/')} className={"text-5xl hablas"}>Hablas</h1>
                    <span onClick={() => navigate('/')}>
                        <Icon path={mdiForum} size={2} />
                    </span>
                </div>
                <div className={" flex items-center mr-2"}>
                    <Link to={isLogged ? '/profile' : "/login"}>
                        <Icon path={mdiAccount} />
                        <span>{isLogged ? 'Perfil' : 'Login'}</span>
                    </Link>
                </div>
            </nav>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Link to={"/chat"}>
                    <Icon path={mdiChat} size={3} className={"absolute bottom-5 right-0 text-sky-900"}/>
                </Link>
            </footer>
        </>
    );
}

export default DefaultLayout;