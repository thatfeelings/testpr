require('dotenv').config()
const TeleBot = require('telebot');
const bot = new TeleBot(process.env.BOT_TOKEN);
bot.on('text', (msg) => msg.reply.text(msg.text));

bot.start();