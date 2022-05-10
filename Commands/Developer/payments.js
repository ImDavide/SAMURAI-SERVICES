const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: "payments",
    description: "Show the payments methods",

    /**
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {


        const Payments = new MessageEmbed()
            .setTitle(`Payments Methods`)
            .setURL(`https://paypal.me/stefanodisante`)
            .setDescription(
           `• Amazon Giftcards EU Region
            • Etherium
            • PayPal Family and Friends
            • Bank Transfer`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/947065424980344913/972911677328748574/static.png`)
            .setColor("#034efc")
            .setImage("https://cdn.discordapp.com/attachments/947065424980344913/973322588459794492/standard.gif")
            .setTimestamp()
            .setFooter({ text: '𝙎𝙖𝙢𝙪𝙧𝙖𝙞\'𝙨 𝙨𝙚𝙧𝙫𝙞𝙘𝙚', iconURL: 'https://cdn.discordapp.com/attachments/947065424980344913/972911677328748574/static.png' });
            
    
    
        interaction.reply({ content: "✅ | Operation completed successfully.", ephemeral: true })
        interaction.channel.send({ embeds: [Payments] });
    }
}