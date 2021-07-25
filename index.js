const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

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
		else if (userName == 'gomide17' && (message.content == 'milky' || message.content == 'chance')) {
			message.reply('**Sério Adriano não vai parar de ouvir a porra dessa banda nunca**');
		}
		else {
			message.reply('Puta música bosta');
		}
	}
	else if (message.content === `${prefix}servidor`) {
		message.reply(`Servidor **${message.guild.name}** criado em: ${message.guild.createdAt}`);
	}
});

client.login('token');

