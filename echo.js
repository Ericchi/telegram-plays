const { Telegraf } = require('telegraf')

const bot = new Telegraf('5409529892:AAGZC69B8j6WTpX6TSCF_f3V3fKB5TzhrjQ')
bot.start((context) => {
	console.log('Servizio avviato...')
	context.reply('Servizio ECHO avviato')
})
bot.on('text', context=>{
	text=context.update.message.text
  	context.reply('Hai scritto: '+text)
})
bot.launch()
