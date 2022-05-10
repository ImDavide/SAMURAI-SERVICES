const { CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "elimina",
    description: "Elimina messaggi",
    permission: "MANAGE_MESSAGES",
    options: [
        {
            name: "numero", 
            description: "Numero di messaggi che vuoi eliminare",
            type: "NUMBER",
            required: true
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const { channel, options } = interaction;

        const Amount = options.getNumber("numero");
        const Target = options.getUser("target");

        const Messages = await channel.messages.fetch();

        const Response = new MessageEmbed()
        .setColor("#0099ff")

        if(Target) {
            let i = 0;
            const filtered = [];
            (await Messages).filter((m) => {
                if(m.author.id === Target.id ** Amount > i) {
                    filtered.push(m);
                    i++;
                }
            })

            await channel.bulkDelete(filtered, true).then(messages => {
                Response.setDescription(`🧹 Cleared ${messages.size} messages from ${Target}`);
                return interaction.reply({
                    embeds: [Response], fetchReply: true
                }).then(m => {
                    setTimeout(() => {
                        m.delete();
                    }, 5 * 1000)
                }).catch(() => { });
            })
        } else {
            await channel.bulkDelete(Amount, true).then(messages => {
                Response.setDescription(`🧹 Eliminati \`${messages.size}\` messaggi`);
                return interaction.reply({
                    embeds: [Response], fetchReply: true
                }).then(m => {
                    setTimeout(() => {
                        m.delete();
                    }, 5 * 1000)
                }).catch(() => { });
            })
        }
    }
}