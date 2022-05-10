const { CommandInteraction, Client, MessageEmbed } = require("discord.js");
    const { connection } = require("mongoose");
    
    require("../../Events/Clients/ready");
    
    module.exports = {
        name: "status",
        description: "Mostra lo stato del bot",
        permission: "ADMINISTRATOR",
    
        /**
         * @param {CommandInteraction} interaction
         * @param {Client} client
         */
    
        async execute(interaction, client) {
    
            let totalSeconds = (client.uptime / 1000);
            let days = Math.floor(totalSeconds / 86400);
            totalSeconds %= 86400;
            let hours = Math.floor(totalSeconds / 3600);
            totalSeconds %= 3600;
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = Math.floor(totalSeconds % 60);
    
    
    
    
    
            const Response = new MessageEmbed()
            .setTitle('STATO DEL BOT')
            .setColor("#58eb34")
            .setDescription(
            `   
            \n **Bot**: \`🟢 Online!\`
            \n **Database**: \`${switchTo(connection.readyState)}\`
            \n **Ping Bot**: \`${client.ws.ping}ms\`
            \n **Ping Messaggi**: \` ${Date.now() - interaction.createdTimestamp}ms \`
            \n **Online da**: ${days} Giorni ${hours} Ore ${minutes} Minuti ${seconds} Secondi`)
    
            interaction.reply({ embeds: [Response]});
        }
    }
    
    
    function switchTo(val) {
        var status = " ";
        switch(val) {
            case 0 : status = `🔴 DISCONNESSO` 
            break;
            case 1 : status = `🟢 CONNESSO`
            break;
            case 2 : status = `🟠 CONNETTENDO`
            break;
            case 3 : status = `🔵 DISCONNETTENDO`
            break;
        }
        return status;
    }