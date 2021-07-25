const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "!";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! o seu ping é ${timeTaken}ms.`);
  }

  else if (command === "soma") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`A soma dos seus números foi: ${sum}!`);
  }
});

client.login(config.BOT_TOKEN);