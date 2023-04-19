import { ButtonInteraction } from 'discord.js'

export interface Button {
    customId: string
    run: (interaction: ButtonInteraction) => Promise<void>
}