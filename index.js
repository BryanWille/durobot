const Discord = require("discord.js");
const {prefix, token} = require("./config.json");

const client = new Discord.Client();

client.on('message', message =>{
  const userName = message.author.username;
  if(message.content.startsWith(`!play`)){
    console.log(message.guild.voiceStates)
    if(userName == 'ElliW'){
      message.reply("Isso sim é música boa!");
    } else if(userName == 'luan123'){
      message.reply('**Vai por funk na pqp**');
    } else if(userName == 'gomide17'){
      message.reply('**Sério? não cansa de ouvir a poha dessa banda**');
    } else {
      message.reply('Puta música bosta');
    }
  } else if (message.content === `${prefix}servidor`){
    message.reply(`Servidor **${message.guild.name}** criado em: ${message.guild.createdAt}`)
  }
})

client.login(token);

