import { EmbedBuilder, SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { GetCharacater } from "../../utils/getCharacter";
import { RollStat } from "../../utils/rollStat";

export const bmNegociar: Command = {
    data: new SlashCommandBuilder()
        .setName("negociar")
        .setDescription("Realizar o movimento básico Negociar.")
        .addStringOption((option) => 
            option
                .setName("modifier")
                .setDescription("Modificador para a rolagem.")
                .setRequired(false)
        ),
    run: async (interaction) => {
        await interaction.deferReply()
        
        const modifierString = interaction.options.getString('modifier')
        let modifier = modifierString ? parseInt(modifierString) : 0

        const { channelId, user } = interaction
        const playerId = user.id

        const character = await GetCharacater(playerId, channelId)
        const check = RollStat(character.character, 'Charisma', modifier)

        const moveResult = new EmbedBuilder()
            .setTitle("Negociar")
            .setColor(check.cardColor)

        switch(check.textResult){
            case "Strong Success":
                moveResult.addFields({name: " ", value: "Eles farão o que você pedir, caso você primeiro garanta lhe conceder o que eles pedirem. "})
                break;
            case "Partial Success":
                moveResult.addFields({name: " ", value: "Eles farão o que você pede, mas exigirão alguma garantia concreta e imediata de sua promessa."})
                break;
            case "Miss":
                moveResult.addFields({name: " ", value: "O Mestre fará um Movimento do Mestre."})
                break;
        }

        await interaction.editReply({ embeds: [check.embedResult, moveResult] })
    }
}
