import { EmbedBuilder, SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { GetCharacater } from "../../utils/getCharacter";
import { RollStat } from "../../utils/rollStat";

export const bmAjudarInterferir: Command = {
    data: new SlashCommandBuilder()
        .setName("ajudar")
        .setDescription("Realizar o movimento básico Ajudar ou Interferir.")
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
        const check = RollStat(character.character, 'Vínculo', modifier)

        const moveResult = new EmbedBuilder()
            .setTitle("Ajudar ou Interferir")
            .setColor(check.cardColor)

        const commonText = "Aquele personagem recebe +1 ou -2, à sua escolha, em sua rolagem"

        switch(check.textResult){
            case "Strong Success":
                moveResult.addFields({name: " ", value: `${commonText}.`})
                break;
            case "Partial Success":
                moveResult.addFields({name: " ", value: `${commonText},  mas você também se expõe ao perigo, retribuição, ou custo de sua ação.`})
                break;
            case "Miss":
                moveResult.addFields({name: " ", value: "O MJ fará um Movimento do Mestre."})
                break;
        }

        await interaction.editReply({ embeds: [check.embedResult, moveResult] })
    }
}
