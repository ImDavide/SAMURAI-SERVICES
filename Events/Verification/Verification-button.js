const { CommandInteraction } = require("discord.js");

  module.exports = {
    
    name: "interactionCreate",

    async execute (interaction) {
      
     if(interaction.isButton()) {
     if(interaction.customId === "verification") {
      
      interaction.reply({ content: `<@${interaction.user.id}>, **You have successfully verified**`, ephemeral: true })

      const Unverified = "972589342507814922"

      var Roles = [
          "972227258070749195" // You can add the number of roles you want
      ]
      
      await interaction.member.roles.add(Roles)
      await interaction.member.roles.remove(Unverified)
      
      }
    }
  }
};