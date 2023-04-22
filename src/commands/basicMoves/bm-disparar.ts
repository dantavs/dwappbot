import { EmbedBuilder, SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { GetCharacater } from "../../utils/getCharacter";
import { RollStat } from "../../utils/rollStat";

export const bmDisparar: Command = {
    data: new SlashCommandBuilder()
        .setName("disparar")
        .setDescription("Realizar o movimento básico Disparar.")
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
        const check = RollStat(character.character, 'Dexterity', modifier)

        const moveResult = new EmbedBuilder()
            .setTitle("Disparar")
            .setColor(check.cardColor)

        switch(check.textResult){
            case "Strong Success":
                moveResult.addFields({name: " ", value: "Você conseguiu um tiro preciso - cause seu dano."})
                break;
            case "Partial Success":
                let resultText = "Escolha um (cause dano independente da escolha):\n"
                resultText += "- Você é forçado a se mover para conseguir uma linha de tiro, colocando-se em perigo conforme escolha do MJ;\n"
                resultText += "- Você é forçado a disparar de qualquer jeito: -1d6 de dano;\n"
                resultText += "- Você é forçado a disparar várias vezes, reduzindo sua munição em 1.\n"
                moveResult.addFields({name: " ", value: resultText})
                break;
            case "Miss":
                moveResult.addFields({name: " ", value: "O Mestre fará um Movimento do Mestre."})
                break;
        }

        await interaction.editReply({ embeds: [check.embedResult, moveResult] })
    }
}
