import { EmbedBuilder, SlashCommandBuilder  } from "discord.js";
import { Command } from "../interfaces/Command";

export const help: Command = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Help for using DwappBot"),
    run: async (interaction) => {
        await interaction.deferReply()

        let commandsList = "**/dwr** *<modifier (optional)>* : Roll 2d6 + modifier\n"
        commandsList += "**/pc** : Show the PC registered for the user\n"
        commandsList += "**/damage** : Inflict PC's damage"
        
        let statCommandsList = "*<commmand> <modifier: optional> (if there is no PC registered, it assumed 0 as the stat value)*\n"
        statCommandsList += "**/str /dex /con /int /wis /cha**\n"
        
        let basicMovesCommandsList = "*/<command> <modifier: optional>*\n"
        basicMovesCommandsList += "**/matar** : Executar o movimento básico Matar e Pilhar\n"
        basicMovesCommandsList += "**/disparar** : Executar o movimento básico Disparar\n"
        basicMovesCommandsList += "**/negociar** : Executar o movimento básico Negociar\n"
        basicMovesCommandsList += "**/defender** : Executar o movimento básico Defender\n"
        basicMovesCommandsList += "**/falar** : Executar o movimento básico Falar Difícil\n"
        basicMovesCommandsList += "**/discernir** : Executar o movimento básico Discernir Realidades\n"
        basicMovesCommandsList += "**/ajudar** : Executar o movimento básico Discernir Realidades\n"
        basicMovesCommandsList += "**/desafiar<f>** : Executar o movimento básico Discernir Realidades. A última letra do comando é o atributo a ser utilizado. Ex.: /desafiarf \n"
        
        let updateCommandsList = "*<command> <modifier: required>*\n"
        updateCommandsList += "**/updthp** : Add or subtract the Modifier of Hit Points value, retricted by the maximum value\n"
        updateCommandsList += "**/updtxp** : Add or subtract the Modifier of the PC's XP\n"
        updateCommandsList += "**/updtammo** : Add or subtract the Modifier of the PC's Ammo\n"
        updateCommandsList += "**/updtr** : Add or subtract the Modifier of the PC's Rations\n"
        
        let setStatCommandsList = "*<command> <modifier: required>*\n"
        setStatCommandsList += "**/setdamage** : Define o dado de Dano do seu personagem\n"

        const embedResult = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle("Dwapp Bot - Help")
            .addFields({name: 'Main commands', value: commandsList})
            .addFields({name: 'Stats commands *(Better with character created in the channel)*', value: statCommandsList})
            .addFields({name: 'Basic Moves commands *(Better with character created in the channel)*', value: basicMovesCommandsList})
            .addFields({name: 'Update commands *(Requires character created)*', value: updateCommandsList})
            .addFields({name: 'Define stats commands *(Requires character created)*', value: setStatCommandsList})

        await interaction.editReply({ embeds: [embedResult] })
    }
}
