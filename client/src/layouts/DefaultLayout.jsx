import Icon from "@mdi/react";
import {mdiAccount, mdiForum, mdiMenu} from "@mdi/js";
import {Outlet} from "react-router-dom";

function DefaultLayout() {
    return (
        <>
            <nav className={"flex justify-between bg-sky-900 text-white"}>
                <div>
                    <Icon path={mdiMenu} size={2}  />
                </div>
                <div className={"flex items-center ml-2"}>
                    <h1>Hablas</h1>
                    <span>
                        <Icon path={mdiForum} size={1} />
                    </span>
                </div>
                <div className={" flex items-center mr-2"}>
                    <button>
                        <Icon path={mdiAccount} />
                        <span>User</span>
                    </button>
                </div>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    );
}

export default DefaultLayout;