
const {addNewUser, checkUser, clearUser, User} = require('../schems/userSchema');
const {Post} = require('../schems/postSchema');
const TelegramApi = require('node-telegram-bot-api');
const cron = require('node-cron');
const token = "2094226777:AAGVqTju7yVGZoZp72UOfSSDO56cG7OPx8k";
const bot = new TelegramApi(token, {polling:true});

async function send(){
    const usersArr = await User.find();
    const postArr = await Post.find();
    console.log(usersArr);
    if (usersArr){
        const day1UsersId = usersArr.filter(user=>{
            if (user.status == 'day1'){
                return user.userId;
            }
        })
        console.log(day1UsersId);
        if (day1UsersId){
            const day1PostArr = postArr.filter(postage=>{
                postage.datePost == 1 })
                day1PostArr.map(post =>{
                    cron.schedule('')
                })
            console.log (day1PostArr)
            
        }
    }
    else {console.log('no users found')}
    
    /*if (statusArr){ //update status users
        checkUser('start')
        User.updateMany({status:/start/},{status:'day0'},function(err, res){
            res.modifiedCount;
        });
        }
        else{
           console.log('Ooops'); 
        }
        checkUser('day1'); */
} 
module.exports = {send}