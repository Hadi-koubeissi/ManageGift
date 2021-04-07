const cd = new Set(), cdseconds = 5;

module.exports = async (client, message) => {

	if (message.author.bot || !message.guild) return;

	const guildData = await client.findOrCreateGuild({ id: message.guild.id });

	const language = guildData.language;
	const lang = require(`../language/${language}`);

	// Check if the bot was mentionned
	if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
		return message.channel.send(lang.myprefix.hello + "**" + `${message.author.tag}` + "**" + "," + lang.myprefix.prefixis(guildData));
	}

	// logs for bot
	client.manager
		.on("giveawayReactionAdded", (giveaway, member, reaction) => console.log(`${member.user.tag} entered giveaway #${giveaway.messageID} (${reaction.emoji.name})`))
		.on("giveawayReactionRemoved", (giveaway, member, reaction) => console.log(`${member.user.tag} unreact to giveaway #${giveaway.messageID} (${reaction.emoji.name})`));

	//now we done prefix fetching for guilds
	if (!message.content.startsWith(guildData.prefix)) return;

	//Our standard argument/command name definition.
	const args = message.content.slice(guildData.prefix.length).trim().split(/ +/g), commandName = args.shift().toLowerCase();
	//Grab the command data from the client.commands Enmap
	const command = client.commands.get(commandName);
	//If that command doesn't exist, silently exit and do nothing
	if (!command) return;

	//cooldown
	if (cd.has(message.author.id)) {
		message.delete();
		return message.channel.send(lang.cooldown.err).then(msg => msg.delete({ timeout: 6000 }).catch(() => {/* Lol */ }));
	}
	cd.add(message.author.id);
	setTimeout(() => cd.delete(message.author.id), cdseconds * 1000);

	//log for any user run command
	client.logger.log(`${message.author.username} id:(${message.author.id}) Use a command ${commandName}`);

	client.channels.cache.get(client.config.logs.command).send(`> **${message.author.username}** iD:(\`${message.author.id}\`) **Use a command** \`${commandName}\``);

	//Run the command
	command.run(client, message, args, guildData, lang);
};