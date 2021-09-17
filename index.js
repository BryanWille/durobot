const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
const uptime = Discord.Client.uptime;

client.on('ready', () => {
	console.log("Tô na área!")
})

client.on('message', message => {
	const userName = message.author.username;
	if(userName == 'Eliass') {
		message.reply('Calaboca não te perguntei nada!');
	}
	if (message.content.startsWith('!play')) {
		if (userName == 'ElliW') {
			message.reply('Isso sim é música boa!');
		}
		else if (userName == 'Luan123') {
			message.reply('**Vai por funk na pqp**');
		}
		else if (userName == 'gomide17') {
			message.reply('**Hur Dur Ai uanti iu bai mai saide**');
		}
		else {
			message.reply('Puta música bosta');
		}
	}
	else if (message.content === `${prefix}servidor`) {
		message.reply(`Servidor **${message.guild.name}** criado em: ${message.guild.createdAt}`);
	}
	else if (message.content === `${prefix}canal`){
		message.reply(`Canal de voz ${message.channel.name} criado em: ${message.channel.createdAt}`)
	}
});

client.on('message', async message => {
	const userName = message.author.username;
	if(userName === `${prefix}play`) {
	}
});

client.login(token);

