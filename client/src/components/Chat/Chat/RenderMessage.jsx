import user from "../../../plugins/user.js";

function RenderMessage({message}) {
    return (
        <>
            <div className={"flex " + (message.user_id === user.id ? 'justify-end ml-8' : 'justify-start mr-8')}>
                <div className={"bg-sky-600 p-2 rounded mr-2 ml-2 mt-2 whitespace-pre-line max-w-72 break-words"}>{message.message}</div>
            </div>
        </>
    );
}

export default RenderMessage;
