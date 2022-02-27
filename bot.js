'use strict';

require('dotenv');

const { Telegraf } = require('telegraf');

const BOT_TOKEN = process.env.BOT_TOKEN;
const BOT_URL = process.env.BOT_URL;
const PORT = process.env.PORT;

const bot = new Telegraf(BOT_TOKEN);

bot.telegram.setWebhook(`${BOT_URL}/bot${BOT_TOKEN}`);
bot.startWebhook(`/bot${BOT_TOKEN}`, null, PORT);

const mainText = 'Русский военный корабль, ИДИ НАХУЙ!';

bot.start(ctx => ctx.reply('РУССКИЙ ВОЕННЫЙ КОРАБЛЬ, ИДИ НАХУЙ!'));

bot.on('text', ctx => {
    const text = ctx.message.text;
    if (mainText.toUpperCase().startsWith(text.toUpperCase())) {
        bot.telegram.sendMessage(ctx.message.chat.id, mainText.substring(text.length), {
            reply_to_message_id: ctx.message.message_id
          });
    } else if(text.toUpperCase() == 'РУССКИЙ' || text.toUpperCase() == 'РУССКІЙ') {
        bot.telegram.sendMessage(ctx.message.chat.id, 'военный корабль, ИДИ НАХУЙ!', {
          reply_to_message_id: ctx.message.message_id
        });
    } else if(text.toUpperCase() == 'РУССКИЙ ВОЕННЫЙ КОРАБЛЬ' || text.toUpperCase() == 'РУССКІЙ ВОЕННЫЙ КОРАБЛЬ') {
        bot.telegram.sendMessage(ctx.message.chat.id, 'ИДИ НАХУЙ!', {
          reply_to_message_id: ctx.message.message_id
        });
    } else if(text.toUpperCase() == 'РУССКИЙ ВОЕННЫЙ' || text.toUpperCase() == 'РУССКІЙ ВОЕННЫЙ') {
        bot.telegram.sendMessage(ctx.message.chat.id, 'корабль, ИДИ НАХУЙ!', {
          reply_to_message_id: ctx.message.message_id
        });
    }
});