import { EmbedBuilder } from "@discordjs/builders";

export function RollStat(character: any, stat: string, modifier: number){

    const strength = character.character ? character.character.modStr : 0

    const die1 = Math.floor(Math.random() * 6 )+1; 
    const die2 = Math.floor(Math.random() * 6 )+1;
    
    const result = die1 + die2 + modifier + strength

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
    .setTitle(`Roll + ${stat}`)
    .addFields(
        {name: textResult , value: result.toString() },
        {name: 'Result', value:`2d6: ${die1} + ${die2} \nStat (${stat}): ${strength} \nModifier: ${modifier}`},
    )

    return {
        embedResult
    }
}