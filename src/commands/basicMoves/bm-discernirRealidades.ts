import { EmbedBuilder, SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { GetCharacater } from "../../utils/getCharacter";
import { RollStat } from "../../utils/rollStat";

export const bmDiscernirRealidades: Command = {
    data: new SlashCommandBuilder()
        .setName("discernir")
        .setDescription("Realizar o movimento básico Discernir Realidades.")
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
        const check = RollStat(character.character, 'Wisdom', modifier)

        const moveResult = new EmbedBuilder()
            .setTitle("Discernir Realidades")
            .setColor(check.cardColor)

        let options = "De qualquer forma, receba +1 adiante quando agir de acordo com as respostas.\n"
        options += "- O que aconteceu aqui recentemente?\n"
        options += "- O que está para acontecer aqui agora?\n"
        options += "- O que eu deveria procurar por aqui?\n"
        options += "- O que eu considero útil ou valioso aqui?\n"
        options += "- Quem realmente está no controle aqui?\n"
        options += "- O que não é realmente o que parece aqui?\n"

        switch(check.textResult){
            case "Strong Success":
                moveResult.addFields({name: " ", value: `Faça ao MJ 3 das perguntas listadas abaixo:\n ${options}`})
                break;
            case "Partial Success":
                moveResult.addFields({name: " ", value: `Faça ao MJ 1 das perguntas listadas abaixo:\n ${options}`})
                break;
            case "Miss":
                moveResult.addFields({name: " ", value: "O MJ fará um Movimento do Mestre."})
                break;
        }

        await interaction.editReply({ embeds: [check.embedResult, moveResult] })
    }
}
