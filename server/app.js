require("babel-register");
require("babel-core/register");
require("babel-polyfill");
const dotEnv = require('dotenv');
dotEnv.config();
// import MongoDB from './dbs/mongo';

// const mongo = new MongoDB({});
// require('./Users').createUsers();
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jquery')(window);
const Main = require('./main').default;
// import Main from "./main";
new Main((err)=>{
    console.log('App initialised');
    if(err) console.log("Reported Errors",err);
});


// stack overflow bug resolve
// https://stackoverflow.com/questions/19426882/node-js-socket-io-socket-io-js-not-found