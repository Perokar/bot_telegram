
const TelegramApi = require('node-telegram-bot-api');
const {addNewUser,checkUser} = require('./schems/userSchema');
const token = "2094226777:AAGVqTju7yVGZoZp72UOfSSDO56cG7OPx8k";
const bot = new TelegramApi(token, {polling:true});

const id='empty';

bot.on("message",   async (msg)=>{
  await bot.sendMessage(msg.from.id, "Вы уже посчитаны")
  const id = {
      userId:  msg.from.id,
      userName:  msg.from.first_name,
      dateNow: new Date().getDate()
  }
  
  checkUser();
  
if (msg.text == "/start") // Добавление в базу
        {
          
        addNewUser(id);
        bot.sendMessage(msg.from.id, "Я токо что добавил Вас в базу данных")
        }
}
)


