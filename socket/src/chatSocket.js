import axios from "axios";

function chatSocket(io, socket) {
    socket.on('chat:connection_chat', (chat) => {
        socket.join(`chat/${chat}`);
    });
    socket.on('chat:send_message', (chat) => {
        axios.get(`api/chat/${chat}`)
            .then(response => {
                io.to(`chat/${chat}`).emit('chat:update_messages', response.data.messages);
            });
    });
    socket.on('chat:new_chat', user_id => {
       io.emit('chat:created_new_chat', user_id);
    });

}

export default chatSocket;