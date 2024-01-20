import { Server } from "socket.io";
import chatSocket from "./src/chatSocket.js";

const io = new Server({
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {

    console.log(socket.id);
    chatSocket(io, socket);
});

io.listen(3000);