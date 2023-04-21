import { EmbedBuilder, SlashCommandBuilder  } from "discord.js";
import { Command } from "../interfaces/Command";
import { GetCharacater } from "../utils/getCharacter";
import { UpdateStat } from "../utils/updateStat";

export const updateAmmo: Command = {
    data: new SlashCommandBuilder()
        .setName("updtammo")
        .setDescription("Update your Ammo.")
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
        const stat = 'Ammo'

        const character = await GetCharacater(playerId, channelId)

        let embedResult = new EmbedBuilder()

        if (character.character){
            const check = await UpdateStat(character.character, stat, modifier)
            embedResult = check.embedResult
        }else{
            embedResult
            .setTitle(`Update ${stat}`)
            .addFields({name: 'There is not any registered character in this channel', value: ' '})
        }

        await interaction.editReply({ embeds: [embedResult] })
    }
}
