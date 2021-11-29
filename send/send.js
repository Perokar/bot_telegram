// use driver pattern
// use winston instead of console.log

const {cron, logger} = require('./drivers');
const {addNewUser, checkUser, clearUser, User} = require('../schems/userSchema');
const {Post} = require('../schems/postSchema');
const {bot} = require ('../index');


logger.info('ku');
logger.error('ssd');
async function send(){
    const usersByStatuses = await User.find({
        status: { $in: ['day1', 'day2', 'day3'] }
    });
    const postArr = await Post.aggregate([
        {
            $filter: {
                datePost: {$gt: 0, $lte: 7}
            },
        },
        {
            $group: {
                _id: {datePost: '$datePost'},
                posts: {$push: { queue: '$queue', post: '$post'}}
            }
        },
        {
            $sort: {
                '_id.datePost': -1
            }
        }
    ]);

    while (usersByStatuses.lenght) {
        const { status, userId } = usersByStatuses.shift(); //day1 1
        const userPosts = postArr.find(({_id: {datePost}}) => `day${datePost}` === status);
        if(userPosts) {
            userPosts.posts.forEach(({post, queue}) => {
                const cronJob = `* * ${queue} * *`;
                const action = () => {
                    console.log('sending message -> ', post);
                };
                cron.addJob({action, cronJob})
            })
        }
    }

    // const postArr = await Post.find();
    // console.log(usersArr);
    // if (usersArr){
    //     const day1UsersId = usersArr.filter(user=>{
    //         if (user.status == 'day1'){
    //             return user.userId;
    //         }
    //     })
    //     console.log(day1UsersId);
    //     if (day1UsersId){
    //         const day1PostArr = postArr.filter(postage=>{
    //             if (postage.datePost == 1){
    //                 return postage.post;
    //             }
    //         })
    //         console.log (day1PostArr)
            
    //     }
    // }
    // else {console.log('no users found')}
    
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