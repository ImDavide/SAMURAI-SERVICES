const { Client, MessageEmbed } = require("discord.js");
const { connection } = require("mongoose");
require("../../Events/Clients/ready.js");

function getPBar(percent) {
    let thick = Math.floor(percent / 5);
    let thin = Math.ceil((100 - percent) / 10) * 2;
    let str = "_[_";

    for (let i = 0; i < thick; i++) str += "▰";
    for (let i = 0; i < thin; i++) str += "▱";

    str += "_]_";

    return str;
};

let usedMemory = process.memoryUsage().heapUsed / 1024 /1024;
let totalMemory = 5000;
let getp = ((usedMemory/totalMemory) * 5000).toFixed(2) + '%';

module.exports = {
    name: "statuss",
    description: "Displays the status of the client and database connection.",
    /**
     * 
     * @param {CommandInteraction} interaction 
     * @param {Client} client 
     */
    async execute(interaction, client) {
        const Embed = new MessageEmbed()
        .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({dynamic: true}))
        .setColor("#2655ff")
        .addFields(
            {name: "Client", value: `Username: \`${client.user.tag}\`\nLibrary: [discord.js](https://discord.js.org/)\nPing: \`${Math.round(client.ws.ping)}ms\`\nUptime: <t:${parseInt(client.readyTimestamp / 1000)}:R>`},
            {name: "Stats", value: `Commands: \`${client.commands.size} commands\`\nGuilds: \`${client.guilds.cache.size} guilds\`\nUsers: \`${client.users.cache.size} users\``, inline: false},
            {name: "Database", value: `Name: \`MongoDB\`\nStatus: \`${switchTo(connection.readyState)}\``, inline: false},
            {name: "Statistics", value: `Memory: \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed()}%\`\nBar: ${getPBar(Math.round(usedMemory/totalMemory * 5000))}`, inline: false}
        )
        .setTimestamp()
        interaction.reply({embeds: [Embed]})
    }
}

function switchTo(val) {
    var status = " ";
    switch(val) {
        case 0 : status = `🔴 Disconnected`
        break;
        case 1 : status = `🟢 Connected`
        break;
        case 2 : status = `🟠 Connecting`
        break;
        case 3 : status = `🟣 Disconnecting`
        break;
    }
    return status;
}