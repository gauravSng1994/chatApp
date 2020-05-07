const express = require('express');
import MongoDB from './dbs/mongo';
const path = require('path');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io').listen(http);
const mongo = new MongoDB({});
require('./Users').createUsers();

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jquery')(window);

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/assets',express.static('assets'));
app.use(express.urlencoded());
app.use(express.json());
app.get('/',(req,res)=>{
    res.render('home.ejs');
    // res.sendFile(__dirname+'/index.html');
})

app.get('/login',(req,res)=>{
    res.render('login');
})
app.get('/signup',(req,res)=>{
    res.render('signUp');
})

app.post('/submitSignUpForm',(req,res)=>{
    console.log('ADFF',req.body);
})

io.on('connection',(socket)=>{
    console.log('A user connected',socket);
});

http.listen(3000,()=>{
    console.log('Listening at port 3000...');
})





// stack overflow bug resolve
// https://stackoverflow.com/questions/19426882/node-js-socket-io-socket-io-js-not-found