import { EmbedBuilder } from "discord.js";
import { prisma } from "../server";

export async function SetStat(character: any, stat: string, modifier: number){

    let strength = character.strength
    let dexterity = character.dexterity
    let constitution = character.constitution 
    let intelligence = character.intelligence
    let wisdom = character.wisdom
    let charisma = character.charisma
    let hitPoints = character.hitPoints
    let maxHP = character.maxHP
    let experience = character.experience
    let level = character.level
    let ammo =  character.ammo
    let maxAmmo =  character.maxAmmo
    let ration = character.ration
    let damage = character.damage

    let currentStat = 0

    switch(stat){
        case 'Strength':
            currentStat = strength
            strength = modifier
            break;
        case 'Dexterity':
            currentStat = dexterity
            dexterity = modifier
            break;
        case 'Constitution':
            currentStat = constitution
            constitution = modifier
            break;
        case 'Intelligence':
            currentStat = intelligence
            intelligence = modifier
            break;
        case 'Wisdom':
            currentStat = wisdom
            wisdom = modifier
            break;
        case 'Charisma':
            currentStat = charisma
            charisma = modifier
            break;
        case 'XP':
            currentStat = experience
            experience = modifier
            break;
        case 'HP':
            currentStat = hitPoints
            hitPoints = modifier
            break;
        case 'Level':
            currentStat = level
            level = modifier
            break;
        case 'Ammo':
            currentStat = ammo
            ammo = modifier
            break;
        case 'Ration':
            currentStat = ration
            ration = modifier
            break;
        case 'Damage':
            currentStat = damage
            damage = modifier
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
            ration,
            damage
        }
    })

    const embedResult = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle(`Update ${stat}`)
    .addFields(
        {name: `Your ${stat} now is ${modifier} `, 
                value: `The value of ${modifier} was defined as your ${stat}, instead you previous value of ${currentStat}.`},
    )           

    return {
        embedResult
    }
}