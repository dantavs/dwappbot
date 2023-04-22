import { EmbedBuilder, SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { GetCharacater } from "../../utils/getCharacter";
import { RollStat } from "../../utils/rollStat";

export const bmFalarDificil: Command = {
    data: new SlashCommandBuilder()
        .setName("falar")
        .setDescription("Realizar o movimento básico Falar Difícil.")
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
        const check = RollStat(character.character, 'Intelligence', modifier)

        const moveResult = new EmbedBuilder()
            .setTitle("Falar Difícil")
            .setColor(check.cardColor)

        const additionalText = "O MJ pode lhe perguntar “Como você sabia disso?”. Diga a verdade!"

        switch(check.textResult){
            case "Strong Success":
                moveResult.addFields({name: " ", value: `O MJ lhe dirá alguma coisa interessante e útil a respeito do assunto.\n ${additionalText}`})
                break;
            case "Partial Success":
                moveResult.addFields({name: " ", value: `O MJ lhe dirá apenas alguma coisa interessante, e caberá a você torná-la útil.\n  ${additionalText}`})
                break;
            case "Miss":
                moveResult.addFields({name: " ", value: "O MJ fará um Movimento do Mestre."})
                break;
        }

        await interaction.editReply({ embeds: [check.embedResult, moveResult] })
    }
}
