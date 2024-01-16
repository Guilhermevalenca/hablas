import Icon from "@mdi/react";
import {mdiAccount} from "@mdi/js";

function DefaultLayout() {
    return (
        <>
           <nav className={"flex"}>
               <button>
                   <Icon path={mdiAccount} title={"user-profile"} /> user
               </button>
           </nav>
        </>
    );
}

export default DefaultLayout;