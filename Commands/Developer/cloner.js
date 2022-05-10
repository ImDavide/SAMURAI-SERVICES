const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: "cloner",
    description: "Show the cloner tool",

     /**
     * @param {CommandInteraction} interaction 
     */

      async execute (interaction) {


        const Cloner = new MessageEmbed()
            .setTitle(`**Discord Server Cloner**`)
            .setDescription(`[Download](https://www.mediafire.com/file/skiu3nlb8vvil17/SAMURAI_CLONER.zip/file)
            
            **What can you do?

            • Copy all channels/vc
            • Copy all roles **
            
            *Make a ticket for any problems* 
            `)
            .setImage("https://cdn.discordapp.com/attachments/947065424980344913/973316572934463498/Senza_titolo-1.png")
            .setColor("#034efc")
            .setTimestamp()
            .setFooter({ text: '𝙎𝙖𝙢𝙪𝙧𝙖𝙞\'𝙨 𝙨𝙚𝙧𝙫𝙞𝙘𝙚', iconURL: 'https://cdn.discordapp.com/attachments/947065424980344913/972911677328748574/static.png' });
            
    
    
            await interaction.reply({ content: "✅ | Operation completed successfully.", ephemeral: true })
             interaction.channel.send({embeds: [Cloner] });
    }
}