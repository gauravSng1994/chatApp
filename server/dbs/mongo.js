const mongoose = require('mongoose');

class MongoDB{
    // db;
    // mongoUrl;
    constructor(props) {
        this.mongoUrl = props.mongoUrl || 'mongodb://localhost:27017/chatApp';
        this.connect();
    }

    connect(){
        mongoose.connect(this.mongoUrl,{useNewUrlParser:true, useUnifiedTopology:true});
        this.db = mongoose.connection;
        this.db.on('error',console.error.bind(console,'connection error:'));
        this.db.once('open', ()=>{
            console.log('Mongo db connected...');
        });
    }

    getDB(){
        return this.db;
    }
}

module.exports = MongoDB;