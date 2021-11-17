
const TelegramApi = require('node-telegram-bot-api');
const userSchema = require('./schems/userSchema')
const token = "2094226777:AAGVqTju7yVGZoZp72UOfSSDO56cG7OPx8k";
const bot = new TelegramApi(token, {polling:true});

const id='empty';
bot.on("message",   async (msg)=>{
  // console.log(msg);
   bot.sendMessage(msg.from.id, "Вы уже посчитаны")
  const id = {
      userId: await msg.from.id,
      userName: await msg.from.first_name 
  }
   console.log(id)
   module.exports.id = id;
if (msg.text == "/start") // Добавление в базу
        {
        userSchema.addNewUser();
        bot.sendMessage(msg.from.id, "Я токо что добавил Вас в базу данных")
        }
}
)


