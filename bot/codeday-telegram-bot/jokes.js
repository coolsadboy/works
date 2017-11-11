var TelegramBot = require('node-telegram-bot-api'),
// Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
cron = require('cron').CronJob,
request = require('request'),
Entities = require('html-entities').XmlEntities,
entities = new Entities(),
telegram = new TelegramBot("476046108:AAG-RFiQmtjyyM7rgJNcOi93jJ7sylcK88k", { polling: true });

telegram.on("text", (message) => {
telegram.sendMessage(message.chat.id, "Hello world");
});

telegram.on('message', function(msg) {
    var id = msg.chat.id;
    telegram.sendMessage(id, msg.text);
    console.log(msg);
})

var job = new cron('* * * * * *', function(){
    var chatId = 96565486,
    url = 'http://www.umori.li/api/random?num=10';

    request(url, function(error, response, body) {
        var data = JSON.parse(body);
        telegram.sendMessage(chatId, entities.decode(data[0].elementPureHtml));
        console.log(data);
    })
});

job.start();