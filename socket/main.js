import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log(socket.id);
});

io.listen(3000);