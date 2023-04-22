import { EmbedBuilder } from "discord.js";
import { prisma } from "../server";

export async function UpdateStat(character: any, stat: string, modifier: number){

    let strength = character.strength
    let dexterity = character.dexterity
    let constitution = character.constitution 
    let intelligence = character.intelligence
    let wisdom = character.wisdom
    let charisma = character.charisma
    let hitPoints = character.hitPoints
    let experience = character.experience
    let level = character.level
    let ammo =  character.ammo
    let ration = character.ration

    let currentStat = 0
    let newStat = 0

    switch(stat){
        case 'Strength':
            currentStat = strength
            newStat = strength + modifier
            strength = newStat
            break;
        case 'Dexterity':
            currentStat = dexterity
            newStat = dexterity + modifier
            dexterity = newStat
            break;
        case 'Constitution':
            currentStat = constitution
            newStat = constitution + modifier
            constitution = newStat
            break;
        case 'Intelligence':
            currentStat = intelligence
            newStat = intelligence + modifier
            intelligence = newStat
            break;
        case 'Wisdom':
            currentStat = wisdom
            newStat = wisdom + modifier
            wisdom = newStat
            break;
        case 'Charisma':
            currentStat = charisma
            newStat = charisma + modifier
            charisma = newStat
            break;
        case 'XP':
            currentStat = experience
            newStat = experience + modifier
            experience = newStat
            break;
        case 'HP':
            currentStat = hitPoints
            newStat = hitPoints + modifier > character.maxHP ? character.maxHP : hitPoints + modifier
            hitPoints = newStat
            break;
        case 'Level':
            currentStat = level
            newStat = level + modifier
            level = newStat
            break;
        case 'Ammo':
            currentStat = ammo
            newStat = ammo + modifier
            ammo = newStat
            break;
        case 'Ration':
            currentStat = ration
            newStat = ration + modifier
            ration = newStat
            break;
    }

    await prisma.character.update({
        where: {
            id: character.id
        },
        data: {
            strength,
            dexterity,
            constitution,
            intelligence,
            wisdom,
            charisma,
            level,
            experience,
            hitPoints,
            ammo,
            ration
        }
    })

    const embedResult = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`Update ${stat}`)
    .addFields(
        {name: `Your ${stat} now is ${newStat} `, 
                value: `The value of ${modifier} was added/subtracted from you previous value of ${currentStat}, respecting the maximum value.`},
    )           

    return {
        embedResult
    }
}