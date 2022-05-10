const { CommandInteraction, MessageEmbed } = require('discord.js');


module.exports = {
    name: "suggerimento",
    description: "Crea un sondaggio",
    permission: "ADMINISTRATOR",
    options: [
        {
            name: "nome",
            description: "Fornisci un nome per il tuo sondaggio",
            type: "STRING",
            required: true
        },
        {
            name: "oggetto",
            description: "Fornisci un descrizione del tuo sondaggio",
            type: "STRING",
            required: true
        }
    ],
    /**
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        const { options }= interaction;

        const nome = options.getString("nome");
        const oggetto = options.getString("oggetto")

        const Response = new MessageEmbed()
        .setColor("#0099ff")
        .setDescription(`${interaction.member}`)
        .addField("Nome", `${nome}`, true)
        .addField("Oggetto", `${oggetto}`, true) 
        .setTimestamp()       
        const message = await interaction.reply({ embeds: [Response], fetchReply:true})
        message.react('✅');
        message.react('❌');
    }
}