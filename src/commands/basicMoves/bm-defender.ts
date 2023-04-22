import { EmbedBuilder, SlashCommandBuilder  } from "discord.js";
import { Command } from "../../interfaces/Command";
import { GetCharacater } from "../../utils/getCharacter";
import { RollStat } from "../../utils/rollStat";

export const bmDefender: Command = {
    data: new SlashCommandBuilder()
        .setName("defender")
        .setDescription("Realizar o movimento básico Defender.")
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
        const check = RollStat(character.character, 'Constitution', modifier)

        const moveResult = new EmbedBuilder()
            .setTitle("Defender")
            .setColor(check.cardColor)

        let options = "Enquanto permanecer na defensiva, sempre que você ou aquilo que estiver defendendo sofrer um ataque, gaste domínio para escolher uma das opções abaixo, na razão de 1 ponto de domínio por opção:\n"
        options += "- Redirecione um ataque realizado contra a pessoa, objeto ou lugar sob sua proteção para você;\n"
        options += "- Reduza o efeito ou dano do ataque pela metade;\n"
        options += "- Abra as defesas do atacante, oferecendo a um aliado +1 adiante contra ele;\n"
        options += "- Cause ao atacante uma quantidade de dano igual ao seu nível."

        switch(check.textResult){
            case "Strong Success":
                let strongSuccess = "*Domínio 3*\n" + options
                moveResult.addFields({name: " ", value: strongSuccess})
                break;
            case "Partial Success":
                let partialSuccess = "*Domínio 1*\n" + options
                moveResult.addFields({name: " ", value: partialSuccess})
                break;
            case "Miss":
                moveResult.addFields({name: " ", value: "O Mestre fará um Movimento do Mestre."})
                break;
        }

        await interaction.editReply({ embeds: [check.embedResult, moveResult] })
    }
}
