import { EmbedBuilder, SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { GetCharacater } from "../../utils/getCharacter";
import { RollStat } from "../../utils/rollStat";

export const bmDesafiarPerigoI: Command = {
    data: new SlashCommandBuilder()
        .setName("desafiari")
        .setDescription("Realizar o movimento básico Desafiar o Perigo (Inteligência).")
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
            .setTitle("Desafiar o Pergio (Inteligência)")
            .setColor(check.cardColor)

        const commonText = "Aquele personagem recebe +1 ou -2, à sua escolha, em sua rolagem"

        switch(check.textResult){
            case "Strong Success":
                moveResult.addFields({name: " ", value: "Realize o que pretendia sem ser afetado pela ameaça."})
                break;
            case "Partial Success":
                moveResult.addFields({name: " ", value: "Você tropeça, hesita, ou se contorce: o MJ lhe oferecerá um resultado pior, uma barganha difícil ou uma escolha desagradável"})
                break;
            case "Miss":
                moveResult.addFields({name: " ", value: "O MJ fará um Movimento do Mestre."})
                break;
        }

        await interaction.editReply({ embeds: [check.embedResult, moveResult] })
    }
}
