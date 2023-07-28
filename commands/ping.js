const { ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
  name: "ping",
  description: "Botun gecikme hızını gösterir.",
  type: 1,
  options: [],
  run: async (client, interaction) => {

    const lourexeEmbed = new EmbedBuilder()
    await interaction.reply({ content: `Pingim: **${client.ws.ping}**`, embeds: [lourexeEmbed] });
  },
};