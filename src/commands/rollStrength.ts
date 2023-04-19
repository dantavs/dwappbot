import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../interfaces/Command";
import { GetCharacater } from "../utils/getCharacter";
import { RollStat } from "../utils/rollStat";

export const rollStrength: Command = {
    data: new SlashCommandBuilder()
        .setName("str")
        .setDescription("Do a Strength roll.")
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

        const { channelId, user } = interaction
        const playerId = user.id

        const character = await GetCharacater(playerId, channelId)
        const check = RollStat(character.character, 'Strength', modifier)

        await interaction.editReply({ embeds: [check.embedResult] })
    }
}
