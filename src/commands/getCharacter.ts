import { EmbedBuilder, SlashCommandBuilder  } from "discord.js";
import { Command } from "../interfaces/Command";
import { GetCharacater } from "../utils/getCharacter";

export const GetChar: Command = {
    data: new SlashCommandBuilder()
        .setName("pc")
        .setDescription("Show your registered character."),
    run: async (interaction) => {
        await interaction.deferReply()

        const { channelId, user } = interaction
        const playerId = user.id

        const character = await GetCharacater(playerId, channelId)

        const embedResult = new EmbedBuilder()

        if (character.character){

        
            embedResult
                .setColor(0x0099FF)
                .setTitle(character.character.name)
                .addFields(
                { name: 'Strength', value: `${character.character.strength.toString()}(${character.character.modStr})`, inline: true },
                { name: 'Dexterity', value: `${character.character.dexterity.toString()}(${character.character.modDex})`, inline: true},
                { name: 'Constitution', value: `${character.character.constitution.toString()}(${character.character.modCon})`, inline: true},
                { name: 'Intelligence', value: `${character.character.intelligence.toString()}(${character.character.modInt})`, inline: true},
                { name: 'Wisdom', value: `${character.character.wisdom.toString()}(${character.character.modWis})`, inline: true},
                { name: 'Charisma', value: `${character.character.charisma.toString()}(${character.character.modCha})`, inline: true},
                { name: ' ', value: ' ', inline: false},
                { name: 'Hit Points', value: `${character.character.hitPoints.toString()}/${character.character.maxHP}`, inline: true},
                { name: 'Level', value: character.character.level.toString(), inline: true},
                { name: 'XP', value: character.character.experience.toString(), inline: true},
                )
            
        if (character.character.portrait != ""){
            embedResult.setImage(character.character.portrait)
        }
        }

        await interaction.editReply({ embeds: [embedResult] })
    }
}
