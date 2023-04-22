import { Command } from "../interfaces/Command";
import { bmMatarPilhar } from "./basicMoves/bm-matarPilhar";
import { dwroll } from "./dwRoll";
import { GetChar } from "./getCharacter";
import { help } from "./help";
import { rollCharisma } from "./rollCharisma";
import { rollConstitution } from "./rollConstitution";
import { rollDexterity } from "./rollDexterity";
import { rollIntelligence } from "./rollIntelligence";
import { rollStrength } from "./rollStrength";
import { rollWisdom } from "./rollWisdom";
import { updateAmmo } from "./updateAmmo";
import { updateHP } from "./updateHP";
import { updateRation } from "./updateRation";
import { updateXP } from "./updateXP";

export const CommandList: Command[] = [
    dwroll, GetChar, help,
    updateHP, updateXP, updateAmmo, updateRation,
    bmMatarPilhar,
    rollStrength, rollDexterity, rollConstitution, rollIntelligence, rollWisdom, rollCharisma,
]