export function checkRoll(modifier: number){
    const die1 = Math.floor(Math.random() * 6 )+1; 
    const die2 = Math.floor(Math.random() * 6 )+1;
    
    const result = die1 + die2 + modifier

    let textResult = ""
    let cardColor = 0x990000

    if (result > 9){
        textResult = "Strong Success"
        cardColor = 0x00AA00
    }else{
        if (result > 6){
            textResult = "Partial Success"
            cardColor = 0xf1c232
        }else{
            textResult = "Miss"
        }
    }

    return {
        die1, die2,
        result, textResult,
        cardColor
    }
}