const fs = require('fs');

const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.js');
client.config = config;

const { GiveawaysManager } = require("discord-giveaways");
const db = require("quick.db");
if (!db.get("giveaways")) db.set("giveaways", []);

const GiveawayManagerWithOwnDatabase = class extends GiveawaysManager {

    // This function is called when the manager needs to get all the giveaway stored in the database.
    async getAllGiveaways() {
        // Get all the giveaway in the database
        return db.get("giveaways");
    }

    // This function is called when a giveaway needs to be saved in the database (when a giveaway is created or when a giveaway is edited).
    async saveGiveaway(messageID, giveawayData) {
        // Add the new one
        db.push("giveaways", giveawayData);
        // Don't forget to return something!
        return true;
    }

    async editGiveaway(messageID, giveawayData) {
        // Gets all the current giveaways
        const giveaways = db.get("giveaways");
        // Remove the old giveaway from the current giveaways ID
        const newGiveawaysArray = giveaways.filter((giveaway) => giveaway.messageID !== messageID);
        // Push the new giveaway to the array
        newGiveawaysArray.push(giveawayData);
        // Save the updated array
        db.set("giveaways", newGiveawaysArray);
        // Don't forget to return something!
        return true;
    }

    // This function is called when a giveaway needs to be deleted from the database.
    async deleteGiveaway(messageID) {
        // Remove the giveaway from the array
        const newGiveawaysArray = db.get("giveaways").filter((giveaway) => giveaway.messageID !== messageID);
        // Save the updated array
        db.set("giveaways", newGiveawaysArray);
        // Don't forget to return something!
        return true;
    }

};

// Create a new instance of your new class
const manager = new GiveawayManagerWithOwnDatabase(client, {
    storage: false,
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#413E3E",
        reaction: config.reaction
    }
});
client.giveawaysManager = manager;
// We now have a client.giveawaysManager property to manage our giveaways!

client.giveawaysManager.on("giveawayReactionAdded", (giveaway, member, reaction) => {

    try {

        if (member.user.bot) return;

        const Discord = require("discord.js")

        const db = require('quick.db')

        const config = require(`./config.js`)

        let language = db.fetch(`language_${member.guild.id}`)

        if (language === null) language = config.basiclang

        const lang = require(`./language/${language}.js`)

        let logs = db.fetch(`logs_${member.guild.id}`)

        if (logs === null) return;

        const salon = member.guild.channels.cache.get(logs);

        const Embed = new Discord.MessageEmbed()
        .setAuthor(lang.logs.raddtitle)
        .setDescription(lang.logs.raddmsg1 + "** **" + "`" + member.user.tag + "`" + "** **" + lang.logs.raddmsg2 + "** **" + "`" + giveaway.messageID + "`" + "** **" + config.reaction)
        .setFooter(config.embeds.footers)
        .setColor(config.events.addcolor)
        .setTimestamp()

        salon.send(Embed)

    } catch (e) {
        return;
    }
});

client.giveawaysManager.on("giveawayReactionRemoved", (giveaway, member, reaction) => {

    try {

        if (member.user.bot) return;

        const Discord = require("discord.js")

        const db = require('quick.db')
        
        const config = require(`./config.js`)

        let language = db.fetch(`language_${member.guild.id}`)

        if (language === null) language = config.basiclang

        const lang = require(`./language/${language}.js`)

        let logs = db.fetch(`logs_${member.guild.id}`)

        if (logs === null) return;

        const salon = member.guild.channels.cache.get(logs);

        const Embed = new Discord.MessageEmbed()
            .setAuthor(lang.logs.rremtitle)
            .setDescription(lang.logs.rremmsg1 + "** **" + "`" + member.user.tag + "`" + "** **" + lang.logs.rremmsg2 + "** **" + "`" + giveaway.messageID + "`" + "** **" + config.reaction)
            .setFooter(config.embeds.footers)
            .setColor(config.events.remcolor)
            .setTimestamp()

        salon.send(Embed)

    } catch (e) {
        return;
    }
});

/* Load all events */
fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`(👌) Event loaded : ${eventName} !`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

client.commands = new Discord.Collection();

/* Load all commands */
fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`(👌) Command loaded : ${commandName} !`);
    });
});

// Login
client.login(config.token);