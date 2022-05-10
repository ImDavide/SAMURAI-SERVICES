const { Database } = require("../../Structures/config.json");
const { Client } = require("discord.js")
const mongoose = require("mongoose");

module.exports = {
    name: "ready",
    once: true,
    /**
     * @param {Client} client
     */
    execute(client) {
        console.log("Il bot ora è pronto ✔")
        const actvs = [
            `𝙎𝙖𝙢𝙪𝙧𝙖𝙞'𝙨 𝙨𝙚𝙧𝙫𝙞𝙘𝙚`, 
            `𝙎𝙖𝙢𝙪𝙧𝙖𝙞'𝙨 𝙨𝙚𝙧𝙫𝙞𝙘𝙚`, 
            `𝙎𝙖𝙢𝙪𝙧𝙖𝙞'𝙨 𝙨𝙚𝙧𝙫𝙞𝙘𝙚`, 
        ]
    
        client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'PLAYING' });
            setInterval(() => {
                client.user.setActivity(actvs[Math.floor(Math.random() * (actvs.length - 1) + 1)], { type: 'PLAYING' });
        }, 5000);
        
        if(!Database) return;
        mongoose.connect(Database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log("Il bot è connesso al database ✔")
        }).catch((err) => {
            console.log(err)
        });
    }
}