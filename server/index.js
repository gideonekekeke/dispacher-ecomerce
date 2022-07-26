const express = require("express");
const port = process.env.PORT || 14000;
const http = require("http");
const cors = require("cors");

require("./utils/db");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(cors());
app.use(express.json());
io.on("connection", (socket) => {
	console.log("a user connected", socket.id);
});

app.use("/api/user", require("./Route/userRoute"));
app.use("/api/product", require("./Route/productRoute"));
app.use("/api/order", require("./Route/orderRoute"));
app.use("/api/admin", require("./Route/adminRoute"));

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
