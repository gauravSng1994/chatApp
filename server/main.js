const express = require('express');
import {series} from 'async';

import AuthController from "./route/AuthController";

export default class Main{
    constructor(callback) {
        series([
            this.initialiseExpressApp(),
            this.startServer(),
            this.initialiseSocketIo(),
            this.initialiseRouter()
        ],callback);
    }

    initialiseExpressApp = (callback) =>{
        const app = express();
        app.set('view engine','ejs');
        app.set('views', path.join(__dirname, 'views'));
        app.use('/assets',express.static('assets'));
        app.use(express.urlencoded());
        app.use(express.json());
        callback();
    }

    startServer = (callback) =>{
        this.http = require('http').createServer(app);
        this.http.listen(3000,()=>{
            console.log('Listening at port 3000...');
        })
        callback();
    }

    initialiseSocketIo = (callback) =>{
        let io = require('socket.io').listen(this.http);
        io.on('connection',(socket)=>{
            console.log('A user connected',socket);
        });
        callback();
    }

    initialiseRouter = (callback) =>{
        let router = express.Router();
        AuthController(router);
        callback();
    }
}