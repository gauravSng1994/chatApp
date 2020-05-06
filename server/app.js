const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
// console.log(io);
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

io.on('connection',(socket)=>{
    console.log('A user connected',socket);
});

app.listen(3000,()=>{
    console.log('Listening at port 3000...');
})


