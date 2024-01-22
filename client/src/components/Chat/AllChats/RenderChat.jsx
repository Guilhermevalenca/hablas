import {ButtonSuccess} from "../../../layouts/buttons/Buttons.jsx";
import {Link} from "react-router-dom";

function RenderChat({user, chat}) {
    return (
        <>
            <Link to={`/chat/${chat}`} >
                <ButtonSuccess className={"w-full"}>
                    {user.name}
                </ButtonSuccess>
            </Link>
        </>
    );
}

export default RenderChat;