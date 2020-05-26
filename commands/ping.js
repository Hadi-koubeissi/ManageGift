const ms = require('ms');
const Discord = require('discord.js')

exports.run = async (client, message, args) => {

    const db = require('quick.db')

    const config = require(`../config.js`)

    let language = db.fetch(`language_${message.guild.id}`)

    if (language === null) language = config.basiclang

    const lang = require(`../language/${language}.js`)

    var ping = Date.now() - message.createdTimestamp;
    message.channel.send(lang.info.ping + `${Date.now() - message.createdTimestamp}`);
}