import { Interaction } from 'discord.js'
import { ButtonList } from '../buttons/_ButtonList'
import { CommandList } from '../commands/_CommandList'

export const onInteraction = async(interaction: Interaction) => {
    if (interaction.isCommand()){
        for (const Command of CommandList){
            if (interaction.commandName === Command.data.name){
                await Command.run(interaction)
                break
            }
        }
    }
    if (interaction.isButton()){
        for (const Button of ButtonList){
            if (interaction.customId === Button.customId){
                await Button.run(interaction)
                break
            }
        }
    }
}