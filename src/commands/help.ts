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
        
        let statCommandsList = "**/str** *<modifier: optional>* : Roll + Strength + Modifier (if there is no PC registered, it assumed 0 as Strength value\n"
        statCommandsList += "**/dex** *<modifier: optional>* : Roll + Dexterity + Modifier (if there is no PC registered, it assumed 0 as Dexterity value\n"
        statCommandsList += "**/con** *<modifier: optional>* : Roll + Constitution + Modifier (if there is no PC registered, it assumed 0 as Constitution value\n"
        statCommandsList += "**/int** *<modifier: optional>* : Roll + Intelligence + Modifier (if there is no PC registered, it assumed 0 as Intelligence value\n"
        statCommandsList += "**/wis** *<modifier: optional>* : Roll + Wisdom + Modifier (if there is no PC registered, it assumed 0 as Wisdom value\n"
        statCommandsList += "**/cha** *<modifier: optional>* : Roll + Charisma + Modifier (if there is no PC registered, it assumed 0 as Charisma value\n"
        
        let basicMovesCommandsList = "**/matar** *<modifier: optional>* : Executar o movimento básico Matar e Pilhar\n"
        
        let updateCommandsList = "**/updthp** *<modifier: required>* : Add or subtract the Modifier of Hit Points value, retricted by the maximum value\n"
        updateCommandsList += "**/updtxp** *<modifier: required>* : Add or subtract the Modifier of the PC's XP\n"
        updateCommandsList += "**/updtammo** *<modifier: required>* : Add or subtract the Modifier of the PC's Ammo\n"
        updateCommandsList += "**/updtr** *<modifier: required>* : Add or subtract the Modifier of the PC's Rations\n"

        const embedResult = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle("Dwapp Bot - Help")
            .addFields({name: 'Main commands', value: commandsList})
            .addFields({name: 'Stats commands *(Better with character created in the channel)*', value: statCommandsList})
            .addFields({name: 'Basic Movements commands *(Better with character created in the channel)*', value: basicMovesCommandsList})
            .addFields({name: 'Update commands *(Requires character created)*', value: updateCommandsList})

        await interaction.editReply({ embeds: [embedResult] })
    }
}
