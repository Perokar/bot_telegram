
const {addNewUser, checkUser, clearUser, User} = require('../schems/userSchema');
const {Post} = require('../schems/postSchema');
const cron = require('node-cron');
console.log('ku');
async function send(){
    const statusArr = await User.find({status:'start'})
    const postArr = await Post.find();
    console.log(postArr);
//     if (statusArr){
//         statusArr.map((userstat)=>{
//             const shedule = cron.schedule(`* 9 ${userstat.dateNow+1} * *`, ()=>{
            
//             },{scheduled:true, timezone: 'Europe/Kiev'})
//         })
// }
    
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