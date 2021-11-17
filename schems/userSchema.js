const mongoose = require('mongoose');
const mainIndex = require('../index')
const Schema = mongoose.Schema;
const cfg = require('../cfg/cfg.js')
const userSchema = new Schema ({
    id: Number,
    name:String
})
const User = mongoose.model ('user', userSchema);
exports.addNewUser = function addNewUser (){
const user = new User(mainIndex.id);
mongoose.connect(cfg.URI , {useUnifiedTopology: true, useNewUrlParser: true});
user.save (function (err){
    mongoose.disconnect();
    if (err){
        console.log(err);
    }
    console.log ("User "+user+" is save")
})
}