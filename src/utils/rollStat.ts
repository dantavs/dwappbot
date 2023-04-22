import { EmbedBuilder } from "@discordjs/builders";
import { checkRoll } from "./checkRoll";

export function RollStat(character: any, statName: string, modifier: number){

    let statValue = 0

    if (character){

        switch (statName){
            case "Strength":
                statValue = character.modStr
                break;
            case "Dexterity":
                statValue = character.modDex
                break;
            case "Constitution":
                statValue = character.modCon
                break;
            case "Intelligence":
                statValue = character.modInt
                break;
            case "Wisdom":
                statValue = character.modWis
                break;
            case "Charisma":
                statValue = character.modCha
                break;
        }
    }

    const roll = checkRoll(modifier+statValue)

    const embedResult = new EmbedBuilder()
    .setColor(roll.cardColor)
    .addFields(
        {name: roll.textResult , value: roll.result.toString() },
        {name: 'Result', value:`2d6: ${roll.die1} + ${roll.die2} \nStat (${statName}): ${statValue} \nModifier: ${modifier}`},
    )

    if (character){
        if (character.portrait){
            embedResult.setThumbnail(character.portrait)
        }
        
        if (character.name){
            embedResult.setTitle(`${character.name} - Roll + ${statName}`)
        }else{
            embedResult.setTitle(`Roll + ${statName}`)
        }
    }

    const cardColor = roll.cardColor
    const textResult = roll.textResult

    return {
        embedResult,
        cardColor,
        textResult
    }
}