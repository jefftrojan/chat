const express = require('express');
const app = express();
const socket = require('socket.io');
const cors = require('cors');

app.use(cors());
app.use(express.json());



const port = 8080;
const server = app.listen(port, () => {
    console.log(`Application server is running on port ${port}`);
});

// create connection to socket
io = socket(server)

io.on('connection', (socket)=>{
    console.log(socket.id);

    socket.on('join_room', (data)=>{
        socket.join(data)
        console.log('User Joined Room: ' + data)
    })

    socket.on('disconnect', ()=>{
        console.log('User disconnected');
    })
})
