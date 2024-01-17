import Icon from "@mdi/react";
import {mdiAccount, mdiForum, mdiMenu} from "@mdi/js";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {useState} from 'react';

function DefaultLayout() {
    const [isLogged, setIsLogged] = useState(localStorage.getItem('token') ? true : false);
    document.addEventListener('isLogged', () => {
        setIsLogged(localStorage.getItem('token') ? true : false);
    });
    const navigate = useNavigate();
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
        </>
    );
}

export default DefaultLayout;