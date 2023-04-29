import { EmbedBuilder, SlashCommandBuilder  } from "discord.js";
import { Command } from "../interfaces/Command";
import { GetCharacater } from "../utils/getCharacter";
import { RollStat } from "../utils/rollStat";

export const inflictDamage: Command = {
    data: new SlashCommandBuilder()
        .setName("damage")
        .setDescription("Infligir dano.")
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

        const moveResult = new EmbedBuilder()
        .setTitle("Infligir Dano")
        .setColor(0x0099FF)
        
        if (character.character){

            const damageDie = Math.floor(Math.random() * character.character.damage )+1; 
            const totalDamage = damageDie + modifier
            
            if (character.character?.portrait){
                moveResult.setThumbnail(character.character.portrait)
            }

            moveResult.addFields({name: totalDamage.toString(), value: `${damageDie} (Dado de Dano: D${character.character.damage}) + ${modifier} (Modificador)`})
        }else{
            moveResult.addFields({name: "Você não possui personagem criado neste canal", value: " "})
        }

        await interaction.editReply({ embeds: [moveResult] })
    }
}
