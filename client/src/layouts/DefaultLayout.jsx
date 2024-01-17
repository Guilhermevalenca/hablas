import Icon from "@mdi/react";
import {mdiAccount, mdiForum, mdiMenu} from "@mdi/js";
import {Link, Outlet} from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <nav className={"flex justify-between bg-sky-900 text-white"}>
                <div className={"flex items-center"}>
                    <button>
                        <Icon path={mdiMenu} size={2}  />
                    </button>
                </div>
                <div className={"flex items-center ml-2"}>
                    <h1 className={"text-5xl hablas"}>Hablas</h1>
                    <span>
                        <Icon path={mdiForum} size={2} />
                    </span>
                </div>
                <div className={" flex items-center mr-2"}>
                    <Link to="/login">
                        <Icon path={mdiAccount} />
                        <span>User</span>
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