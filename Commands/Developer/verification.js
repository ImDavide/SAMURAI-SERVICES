const { CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  
  name: "verification",
  description: "Send the embed to the specified verification channel.",
  

   async execute (interaction) {

    const { guild } = interaction;

    const VERIFICATION = "972586076797554708"
    
    const Embed = new MessageEmbed()

    .setTitle("✅ | Verification")
    .setDescription("Click the button to verify yourself!")
    .setColor("#034efc")

    const Row = new MessageActionRow()

    .addComponents(
      
      new MessageButton()
      .setStyle("SUCCESS")
      .setCustomId("verification")
      .setLabel("Verify")
      .setEmoji("✅")
      
    );

    await guild.channels.cache.get(VERIFICATION).send({ embeds: [Embed], components: [Row] })

    interaction.reply({ content: "✅ | Operation completed successfully.", ephemeral: true })
    
   }
};