
process.env.NTBA_FIX_319 = 1;
const TelegramApi = require('node-telegram-bot-api');
const {addNewUser,checkUser, clearUser} = require('./schems/userSchema');
const {addPost, checkPost, clearPost, sendStartPost} = require('./schems/postSchema');
const {send} = require('./send/send')
const token = "2094226777:AAGVqTju7yVGZoZp72UOfSSDO56cG7OPx8k";
const bot = new TelegramApi(token, {polling:true});

bot.on("message",   async (msg, prop)=>{
    const id = {
      userId:  msg.from.id,
      userName:  msg.from.first_name,
      dateNow: new Date().getDate(),
      status: 'start'
  }
  if (msg.text == '/start'){
          addNewUser(id);
          const  messageArr = await sendStartPost();
          messageArr.forEach((text)=>{
                  bot.sendMessage(msg.from.id, text.post, {parse_mode: 'Markdown', disable_web_page_preview: true}).then;
          })
          
  }
  if (msg.text == "/test") // поиск
  {
          send();
//    const userCollection = await checkUser();
//    const posts = await checkPost();
//    console.log('hi');
//    userCollection.map((obj)=>{
//                 posts.map ((message)=>{
//                       bot.sendMessage(obj.userId, message.post, {parse_mode: 'Markdown', disable_web_page_preview: true});
//                 })
//         })
//   //bot.sendMessage(msg.from.id, `[Піч на колесах \- DXP](https://youtu.be/8Sh2twEoXBY) Domino's Pizza разом з американською інженерною компанією Roush Enterprises побудували спеціальний автомобіль для доставки піци - Delivery ExPert або DXP. Особливість автомобіля в тому, що він обладнаний вбудованою піччю для постійного підігріву піци, тож клієнт завжди отримує піцу ідеальної температури \- 60 градусів\.`, {parse_mode: 'Markdown', disable_web_page_preview: true})
  } 
  if (msg.text == "/add") // поиск
  {
  addPost();
  }
if (msg.text == "/find") // Добавление в базу
       {
         checkUser();
       // checkPost();
        //bot.sendMessage(User.userId, "Я токо что добавил Вас в базу данных")
        }
if (msg.text == "/clean") // Удаление из базы
        {
        clearPost();
        clearUser();
        bot.sendMessage(msg.from.id, "База обнулена")
        } 
}
)


