const express = require('express');
import {series} from 'async';
import path from 'path';
import AuthController from "./route/AuthController";

export default class Main{
    constructor(callback) {
        series([
            this.initialiseExpressApp,
            this.startServer,
            this.initialiseSocketIo,
            this.initialiseRouter
        ],callback);
    }

    initialiseExpressApp = (callback) =>{
        this.app = express();
        this.app.set('view engine','ejs');
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.use('/assets',express.static('assets'));
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.json());
        callback(null);
    }

    startServer = (callback) =>{
        this.http = require('http').createServer(this.app);
        this.http.listen(3000,()=>{
            console.log('Listening at port 3000...');
        })
        callback(null);
    }

    initialiseSocketIo = (callback) =>{
        let io = require('socket.io').listen(this.http);
        io.on('connection',(socket)=>{
            console.log('A user connected',socket);
        });
        callback(null);
    }

    initialiseRouter = (callback) =>{
        let router = express.Router();
        AuthController(router);
        this.app.use('/',router);
        callback(null);
    }
}