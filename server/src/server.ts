import { io, server } from "./app";

const startServer = async () => {
    const port = process.env.PORT || 5050;

    io.on("connection", (socket) => {
        console.log("A user connected:", socket.id);

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });

    server.listen(port, () => {
        console.log(`Listening on port: ${port}`);
    });
};

startServer();
