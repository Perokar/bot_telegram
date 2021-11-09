
const TelegramApi = require('node-telegram-bot-api');
const token = "2094226777:AAGVqTju7yVGZoZp72UOfSSDO56cG7OPx8k";
const bot = new TelegramApi(token, {polling:true});
const usersTelegram = {};
    
bot.on("message",  (msg)=>{
    const userText = msg.text;
    const nameUser = msg.chat.first_name;
    const userId = msg.chat.id;

   console.log(msg)
    function sayHi(Id){ 
        bot.sendMessage(Id, `Привіт, я DomiNick, твій віртуальний помічник.
        Завтра твій перший робочий день в Domino's Pizza Ukraine!
        Я познайомлю тебе з компанією та розкажу, що де знаходиться.`)
        .then(setTimeout(() => {bot.sendMessage(Id, `Пропоную тобі такий план-мінімум на завтра:

        1. Подай документи до відділу кадрів.
        Чекліст:
        а) Трудова книга
        б) ІНН та паспорт (з додатком про реєстацію, якщо в тебе ID)
        в) Три фотографії (розміром 3х4)
        г) Диплом про вищу освіту
        д) Свідоцтво про шлюб та народження дитини (за наявності)
        е) Документи надання пільг (за наявності)
        
        2. Зустрінься зі своїм керівником та познайомся з колегами
        
        3. Прогуляйся офісом
        
        ПСпс: якшо знадобиться WIFI, підключайся до "Dominos Pizza", пароль 0442221111`)
            
        }, 2000));
       console.log('ssmile');
    }
    
    if (userText==="/start"){
       
        sayHi(userId);    
    }
})

