const Discord = require('discord.js');
const superagent = require("superagent");
const Client = new Discord.Client();
const OwnerID = "240128376105336832";

const prefix = "~"



Client.on("ready", () => {
	console.log("online");
	Client.user.setPresence({ game: { name: `~ is the prefix <3`, type: 0} });
});

Client.on("guildCreate", guild => {
	console.log("Some one added the test bot to a server created by: " + guild.owner.user.username)
});

Client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);
	
	if (command === "ping") {
		message.channel.send(`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`);
	} else

	if (command === "say") {
		message.delete()
                const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription( " " + args.join(" "));
		message.channel.send({embed})
	} else

   if (command === "cat") {
	   const { body } = await superagent
	   .get('http://random.cat/meow');
	   const embed = new Discord.RichEmbed()
	   .setColor(0x954D23)
	   .setTitle("Meow :cat:")
	   .setImage(body.file)
	   message.channel.send({embed})
   } else

   if (command === "announcement") {
	   if (message.member.hasPermission("ADMINISTRATOR")) {
		   const text = args.join(" ")
		   if (text.length < 1) return message.channel.send("Can not announce nothing");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor(0x954D23)
		   .setTitle("Important Announcement:")
		   .setDescription(text);
		   message.channel.send("@everyone")
		   message.channel.send({embed})
	   }
   } else

	if (command == "help") {
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Command List:")
		.addField("~help", "Will give the current command list")
		.addField("~ping", "WIll show the ping time for the bot")
		.addField("~say [text]", "Will make the bot say something")
		.addField("~announcement [text]", "Will make the bot say an announcement and tag everyone")
		.addField("~cat", "Will send a random cat image")
		.addField("~tts", "Will send text to speech message")
		.addField("~8ball", "Will send a random awnser by the magical 8ball");
		message.channel.send({embed})
	  } else

	  if (command == "tts") {
		message.channel.send("hello there, it seems i have a voice. How nice.", { tts: true });
		} else

		if (command == "8ball") {
			var sayings = ["It is certain",
											"It is decidedly so",
											"Without a doubt",
											"Yes, definitely",
											"You may rely on it",
											"As I see it, yes",
											"Most likely",
											"Outlook good",
											"Yes",
											"Signs point to yes",
											"Reply hazy try again",
											"Ask again later",
											"Better not tell you now",
											"Cannot predict now",
											"Concentrate and ask again",
											"Don't count on it",
											"My reply is no",
											"My sources say no",
											"Outlook not so good",
											"Very doubtful"];
	
				var result = Math.floor((Math.random() * sayings.length) + 0);
				bot.reply(message, sayings[result]);
		}

});

Client.login("Mzg3Njg3MjY1MjA1MjIzNDM1.DQid9w.7hJJAwDQhUqf5kg3wgaQZ8V1WsA");