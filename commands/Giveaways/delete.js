const ms = require("ms");
exports.run = async (client, message, args, lang) => {
    let role = client.db.fetch(`role_${message.guild.id}`)
    if (!role) role = client.config.grole;
    // If the member doesn't have enough permissions
    if (!message.member.hasPermission("MANAGE_MESSAGES") && !message.member.roles.cache.some((r) => r.name === role)) 
        return message.channel.send(lang.create.perms + "** **" + "`" + role + "`" + "!.");
   
    let id = args[0];
    if (!id) return message.channel.send(lang.edit.msg);
    let hasGiveaway = client.giveawaysManager.giveaways.find((g) => g.messageID === id);
    if (!hasGiveaway)return message.channel(lang.edit.err);
    client.giveawaysManager.delete(hasGiveaway.messageID)
    message.channel.send(lang.delete.done).then((msg) => {
        msg.delete({ timeout: 10000 })
    }).then(() => {
            if (message.deletable) message.delete({ timeout: 10000 });
            return;
        }).catch((e) => {
            message.channel.send(lang.edit.errmod);
        });
}
