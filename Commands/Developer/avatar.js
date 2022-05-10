const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: "avatar",
    description: "Mostra l'avatar di una persona",
    options: [
        {
            name: "tag",
            description: "Seleziona la persona che vuoi taggare",
            type: "USER",
            required: true,
        },
    ],
    /**
     * @param {CommandInteraction} interaction 
     */
    execute(interaction) {
        const { options } = interaction;
        const Target = options.getUser("tag");

        const Response = new MessageEmbed()
            .setAuthor({ name: `Avatar di ${Target.username}`, iconURL: `${Target.displayAvatarURL({ dynamic: true, size: 512 })}` })
            .setDescription(`❯ \`Link download:\` **[Png](${Target.displayAvatarURL({ format: "png", size: 1024 })})  | [Jpg](${Target.displayAvatarURL({ format: "jpg", size: 1024 })})  | [Gif](${Target.displayAvatarURL({ format: "gif", size: 1024, dynamic: true })}) | [Webp](${Target.displayAvatarURL({ format: "webp", size: 1024 })})**`)
            .setImage(`${Target.displayAvatarURL({ dynamic: true, size: 512 })}`)
            .setColor("#034efc")
            .setFooter({ text: '𝙎𝙖𝙢𝙪𝙧𝙖𝙞\'𝙨 𝙨𝙚𝙧𝙫𝙞𝙘𝙚', iconURL: 'https://cdn.discordapp.com/attachments/947065424980344913/972911677328748574/static.png' })
            .setTimestamp();
    
    
    
        interaction.reply({ embeds: [Response] });
    }
}