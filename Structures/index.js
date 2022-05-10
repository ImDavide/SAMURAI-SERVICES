const { Client, Collection } = require("discord.js");
const client = new Client({
    intents: 32767,
    partials: ['CHANNEL']
});
const { Token } = require("./config.json");
const { promisify } = require("util");
const { glob } = require("glob");
const PG = promisify(glob);
const Ascii = require("ascii-table");
const { DiscordTogether } = require('discord-together');
require("dotenv").config();
console.log(process.env.BOT_TOKEN);
client.discordTogether = new DiscordTogether(client); 


client.commands = new Collection();

["Events", "Commands"].forEach(handler => {
    require(`./Handlers/${handler}`)(client, PG, Ascii);
});

// require("./Handlers/Events")(client);
// require("./Handlers/Commands")(client);

client.login(process.env.BOT_TOKEN);