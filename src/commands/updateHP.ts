import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../interfaces/Command";
import { GetCharacater } from "../utils/getCharacter";
import { UpdateStat } from "../utils/updateStat";

export const updateHP: Command = {
    data: new SlashCommandBuilder()
        .setName("updthp")
        .setDescription("Update your Hit Points.")
        .addStringOption((option) => 
            option
                .setName("modifier")
                .setDescription("Modifier in the DW roll.")
                .setRequired(true)
        ),
    run: async (interaction) => {
        await interaction.deferReply()
        
        const modifierString = interaction.options.getString('modifier')
        let modifier = modifierString ? parseInt(modifierString) : 0

        const { channelId, user } = interaction
        const playerId = user.id

        const character = await GetCharacater(playerId, channelId)
        const check = await UpdateStat(character.character, 'HP', modifier)

        await interaction.editReply({ embeds: [check.embedResult] })
    }
}
