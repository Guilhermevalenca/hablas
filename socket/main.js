import { Server } from "socket.io";
import chatSocket from "./src/chatSocket.js";
import './plugins/axios.js';

const io = new Server({
    cors: {
        origin: process.env.CLIENT_URL
    }
});

io.on("connection", (socket) => {

    console.log(socket.id);
    chatSocket(io, socket);

});

io.listen(3000);