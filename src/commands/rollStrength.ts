import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../interfaces/Command";
import { EmbedBuilder } from 'discord.js'
import { GetCharacater } from "../utils/getCharacter";

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

        const { channelId, user } = interaction
        const playerId = user.id

        const character = await GetCharacater(playerId, channelId)

        const strength = character.character ? character.character.modStr : 0

        let modifier = modifierString ? parseInt(modifierString) : 0

        const die1 = Math.floor(Math.random() * 6 )+1; 
        const die2 = Math.floor(Math.random() * 6 )+1;
        
        const result = die1 + die2 + modifier + strength

        let textResult = ""
        let color = 0x0099FF

        if (result > 9){
            textResult = "Strong Success"
            color = 0x00AA00
        }else{
            if (result > 6){
                textResult = "Partial Success"
                color = 0xf1c232
            }else{
                textResult = "Miss. Gain +1 XP."
                color = 0xf1c232
            }
        }

        const embedResult = new EmbedBuilder()
            .setColor(color)
            .setTitle('Roll + Strength')
            .addFields(
                {name: textResult , value: result.toString() },
                {name: 'Result', value:`2d6: ${die1} + ${die2} \nStat: ${strength} \nModifier: ${modifier}`},
            )

        await interaction.editReply({ embeds: [embedResult] })
    }
}
