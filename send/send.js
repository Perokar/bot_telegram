
const {addNewUser, checkUser, clearUser, User} = require('../schems/userSchema');
const {Post} = require('../schems/postSchema');
const {bot} = require ('../index');
const cron = require('node-cron');
console.log('ku');
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
                if (postage.datePost == 1){
                    return postage.post;
                }
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