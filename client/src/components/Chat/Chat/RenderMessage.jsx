import user from "../../../plugins/user.js";

function RenderMessage({message}) {
    console.log(message)
    return (
        <>
            <div className={"flex " + (message.user_id === user.id ? 'justify-end' : 'justify-start')}>
                <div className={"bg-sky-600 p-2 rounded mr-2 ml-2"}>{message.message}</div>
            </div>
        </>
    );
}

export default RenderMessage;
