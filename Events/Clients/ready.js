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
        console.log("Il bot ora รจ pronto โ")
        const actvs = [
            `๐๐๐ข๐ช๐ง๐๐'๐จ ๐จ๐๐ง๐ซ๐๐๐`, 
            `๐๐๐ข๐ช๐ง๐๐'๐จ ๐จ๐๐ง๐ซ๐๐๐`, 
            `๐๐๐ข๐ช๐ง๐๐'๐จ ๐จ๐๐ง๐ซ๐๐๐`, 
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
            console.log("Il bot รจ connesso al database โ")
        }).catch((err) => {
            console.log(err)
        });
    }
}