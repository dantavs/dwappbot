import { prisma } from "../server";

export async function GetCharacater(playerId: string, channelId: string){
    const character = await prisma.character.findFirst({
        where: {
            channelId,
            playerId
        }
    })

    if (character){return {'character': character, 'message': 'ok'}}

    return {'message': 'You have no character in this channel.'}
}