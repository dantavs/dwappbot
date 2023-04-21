import { EmbedBuilder } from "@discordjs/builders";

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

    const die1 = Math.floor(Math.random() * 6 )+1; 
    const die2 = Math.floor(Math.random() * 6 )+1;
    
    const result = die1 + die2 + modifier + statValue

    let textResult = ""
    let color = 0x0099FF

    if (result > 9){
        textResult = "Strong Success"
        color = 0x00AA00
    }else{
        if (result > 6){
            textResult = "Partial Success"
            color = 0xf1c232
        }else{
            textResult = "Miss. Gain +1 XP."
            color = 0xf1c232
        }
    }

    const embedResult = new EmbedBuilder()
    .setColor(color)
    .addFields(
        {name: textResult , value: result.toString() },
        {name: 'Result', value:`2d6: ${die1} + ${die2} \nStat (${statName}): ${statValue} \nModifier: ${modifier}`},
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

    return {
        embedResult
    }
}