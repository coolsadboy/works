var TelegramBot = require('node-telegram-bot-api'),
// Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
cron = require('cron').CronJob,
request = require('request'),
telegram = new TelegramBot("476046108:AAG-RFiQmtjyyM7rgJNcOi93jJ7sylcK88k", { polling: true });

telegram.on("text", (message) => {
telegram.sendMessage(message.chat.id, "Hello world");
});

var job = new cron('* * * * * *', function(){
    console.log('Privet!');
});

job.start();

telegram.on('message', function(msg) {
    var id = msg.chat.id;
    telegram.sendMessage(id, msg.text);
    //console.log(msg);
})