const mongoose = require('mongoose');
const mainIndex = require('../index')
const Schema = mongoose.Schema;
const cfg = require('../cfg/cfg.js')
mongoose.connect(cfg.URI , {useUnifiedTopology: true, useNewUrlParser: true});
const userSchema = new Schema ({
    userId: Number,
    userName:String,
    dateNow: Number
})
const User = mongoose.model ('user', userSchema); //запись юзера
 function addNewUser (dataUser){    
    const user = new User(dataUser);
    user.save (function (err){
        if (err){
            console.log(err);
                }   
})
}
async function checkUser() { //проверка юзера
    const userCollection = await User.find({});
    console.log(userCollection);
}
module.exports = {addNewUser, checkUser}