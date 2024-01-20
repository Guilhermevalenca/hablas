import {useParams} from "react-router-dom";

function Chat() {
    const {id} = useParams();

    return (
        <>
            <div>{id}</div>
        </>
    );
}

export default Chat;