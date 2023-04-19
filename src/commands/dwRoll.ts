import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../interfaces/Command";
import { EmbedBuilder } from 'discord.js'

export const dwroll: Command = {
    data: new SlashCommandBuilder()
        .setName("dwr")
        .setDescription("Do a Dungeon World roll.")
        .addStringOption((option) => 
            option
                .setName("modifier")
                .setDescription("Modifier in the DW roll.")
                .setRequired(false)
        ),
    run: async (interaction) => {
        await interaction.deferReply()
        
        const modifierString = interaction.options.getString('modifier')

        let modifier = modifierString ? parseInt(modifierString) : 0


        const embedResult = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Dungeon World roll')
            .addFields(
                {name: 'Result: ', value: "0"},
                {name: 'Detailed Result', value:`0 (2d6) + ${modifier} (modified) `},
            )

        await interaction.editReply({ embeds: [embedResult] })
    }
}
