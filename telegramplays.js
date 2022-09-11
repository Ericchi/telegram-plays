const { Telegraf } = require('telegraf')

// get filesystem module
const fs = require("fs");

var ks = require('node-key-sender');

var cron = require('node-cron');

const tokenTxt = fs.readFileSync("token.txt");
const bot = new Telegraf(tokenTxt)

ks.setOption('globalDelayPressMillisec', 250);
ks.setOption('globalDelayBetweenMillisec', 50);

bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username
})
/* Disattivata per debug
 bot.command('quit', (ctx) => {
  // Explicit usage
  ctx.telegram.leaveChat(ctx.message.chat.id)

  // Using context shortcut
  ctx.leaveChat()
})
*/
var debugga = function Text_Debug(chat_id, first_name, text) {

}

cron.schedule('*/10 * * * *', () => {
  // Autosave
  ks.sendKey('1');
  console.log("Auto-backup");
});

bot.on('text', (ctx) => {
  // Explicit usage
  //ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`)

    console.log(ctx.message.chat.id)
    console.log(ctx.message.from.first_name)
    console.log(ctx.message.text)
    
    // Se inserisci gibberish, ti fa errore con tutte le info sul messaggio
    // a
    
  switch(ctx.message.text.toLowerCase()) {
    case 'start':
        ks.sendKey('enter');
        break;
    case 'select':
        ks.sendKey('back_space');
        break;
    case 'a':
        ks.sendKey('x');
        break;
    case 'b':
        ks.sendKey('z');
        break;
    case 'n':
    case 'up':
    case 'su':
        ks.sendKey('up');
        break;
    case 's':
    case 'down':
    case 'giù':
    case 'giu':
        ks.sendKey('down');
        break;
    case 'w':
    case 'left':
    case 'sx':
    case 'sinistra':
        ks.sendKey('left');
        break;
    case 'e':
    case 'right':
    case 'dx':
    case 'destra':
        ks.sendKey('right');
        break;
    case 'comandi':
    case 'istruzioni':
        ctx.reply(`Istruzioni per il gioco:\nStiamo facendo una partita di gruppo a Pokémon Crystal Clear!\nIl gioco si controlla scrivendo nei commenti dei post di EricchiPosting certe parole che corrispondono a certi tasti che poi verranno inviati al Game Boy virtuale. La partita si può vedere attraverso lo streaming in onda sul canale.\n\nEcco la lista dei comandi con accanto la parola corrispondente:\nA: "a"\nB: "b"\nSu: "n" oppure "up" o "su"\nGiù: "s" oppure "down" o "giù" o "giu"\nSinistra: "w" oppure "left" o "sx" o "sinistra"\nDestra: "e" oppure "right" o "dx" o "destra"\nStart: "start"\nSelect: "select"`)
  }
  
  // Using context shortcut
  // ctx.reply(`Hello ${ctx.state.role}`)
})

bot.on('callback_query', (ctx) => {
  // Explicit usage
  ctx.telegram.answerCbQuery(ctx.callbackQuery.id)

  // Using context shortcut
  ctx.answerCbQuery()
})

bot.on('inline_query', (ctx) => {
  const result = []
  // Explicit usage
  ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result)

  // Using context shortcut
  ctx.answerInlineQuery(result)
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))


