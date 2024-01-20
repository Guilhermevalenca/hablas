import {ButtonSuccess} from "../../../layouts/buttons/Buttons.jsx";
import {Link} from "react-router-dom";

function RenderChat({user}) {
    return (
        <>
            <Link to={`/chat/${user.id}`} >
                <ButtonSuccess className={"w-full"}>
                    {user.name}
                </ButtonSuccess>
            </Link>
        </>
    );
}

export default RenderChat;