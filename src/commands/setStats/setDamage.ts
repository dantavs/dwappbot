import { EmbedBuilder, SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { GetCharacater } from "../../utils/getCharacter";
import { SetStat } from "../../utils/setStat";

export const setDamage: Command = {
    data: new SlashCommandBuilder()
        .setName("setdamage")
        .setDescription("Definr your Damage value.")
        .addStringOption((option) => 
            option
                .setName("value")
                .setDescription("Modifier in the DW roll.")
                .setRequired(true)
        ),
    run: async (interaction) => {
        await interaction.deferReply()
        
        const modifierString = interaction.options.getString('value')
        let modifier = modifierString ? parseInt(modifierString) : 0

        const { channelId, user } = interaction
        const playerId = user.id
        const stat = 'Damage'

        const character = await GetCharacater(playerId, channelId)

        let embedResult = new EmbedBuilder()

        if (character.character){
            const check = await SetStat(character.character, stat, modifier)
            embedResult = check.embedResult
        }else{
            embedResult
            .setTitle(`Set ${stat}`)
            .addFields({name: 'There is not any registered character in this channel', value: ' '})
        }

        await interaction.editReply({ embeds: [embedResult] })
    }
}
