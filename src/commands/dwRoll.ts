import { SlashCommandBuilder  } from "discord.js";
import { Command } from "../interfaces/Command";
import { EmbedBuilder } from 'discord.js'
import { checkRoll } from "../utils/checkRoll";

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

        const roll = checkRoll(modifier)

        const embedResult = new EmbedBuilder()
            .setColor(roll.cardColor)
            .setTitle('Dungeon World roll!')
            .addFields(
                {name: roll.textResult , value: roll.result.toString() },
                {name: 'Result', value:`2d6: ${roll.die1} + ${roll.die2} \n Modifier: ${modifier}`},
            )

        await interaction.editReply({ embeds: [embedResult] })
    }
}
