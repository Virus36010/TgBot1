const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.6387486616:AAEQSVVyEguFB6acc3zmXzERlJp98GIzKCE)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
