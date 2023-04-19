import { PrismaClient } from '@prisma/client'
import Discord from 'discord.js'
import { IntentOptions } from './IntentOptions';
import { onReady } from './events/onReady';
import { onInteraction } from './events/onInteraction';


(async () => {
    const BOT: Discord.Client = new Discord.Client({intents:IntentOptions});
    BOT.on("ready", async () => await onReady(BOT));
    BOT.on("interactionCreate", async (interaction) => {
        await onInteraction(interaction)
    })
    await BOT.login (process.env.BOT_TOKEN)
})()

export const prisma = new PrismaClient()