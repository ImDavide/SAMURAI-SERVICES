const { CommandInteraction, MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton, MessageReaction, Collector} = require('discord.js');

module.exports = {
    name: 'reazione-ruoli',
    description: 'Un comando per dei ruoli automatici',
    permission: 'ADMINISTRATOR',
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('updates')
            .setLabel('💎 Tryharder')
            .setStyle('PRIMARY'),

            new MessageButton()
            .setCustomId('status')
            .setLabel('🍆 Fregno')
            .setStyle('PRIMARY'),

            new MessageButton()
            .setStyle('PRIMARY')
            .setCustomId('announcments')
            .setLabel('🩸 Purista')
            .setEmoji('5203linksymbol:939931329699668059')

        )
        const embed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Ruoli')
        .setDescription('Premi uno dei bottoni per ricevere il ruolo')

        interaction.reply({content: 'Messaggio creato ✅', ephemeral: true})

       const m = await interaction.channel.send({embeds: [embed], components: [row]})

       const iFilter = i => i.user.id === interaction.member.id;

       const collector = m.createMessageComponentCollector({filter: iFilter, time: 60000});

       collector.on('collect', async i => {
           if(i.customId === 'updates') {
               const role = interaction.guild.roles.cache.get('923555572433956864')
               if(i.member.roles.cache?.has('923555572433956864')) {
                   i.member.roles.remove('923555572433956864')
                   i.reply({content: ` ${role} Rimosso ✅`, ephemeral: true})
               } else {
                   i.member.roles.add('923555572433956864')
                   i.reply({content: ` ${role} Aggiunto ✅`, ephemeral: true})
               }
           } else if(i.customId === 'status') {
            const role = interaction.guild.roles.cache.get('939239794955944018')
            if(i.member.roles.cache?.has('939239794955944018')) {
                i.member.roles.remove('939239794955944018')
                i.reply({content: ` ${role} Rimosso ✅`, ephemeral: true})
            } else {
                i.member.roles.add('939239794955944018')
                i.reply({content: ` ${role} Aggiunto ✅`, ephemeral: true})
            }
           } else if(i.customId === 'announcments') {
            const role = interaction.guild.roles.cache.get('939239806272151592')
            if(i.member.roles.cache?.has('939239806272151592')) {
                i.member.roles.remove('939239806272151592')
                i.reply({content: ` ${role} Rimosso✅`, ephemeral: true})
            } else {
                i.member.roles.add('939239806272151592')
                i.reply({content: ` ${role} Aggiunto ✅`, ephemeral: true})
            }
           }
       })
    }
}