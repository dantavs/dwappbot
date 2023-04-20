import { Command } from "../interfaces/Command";
import { dwroll } from "./dwRoll";
import { rollCharisma } from "./rollCharisma";
import { rollConstitution } from "./rollConstitution";
import { rollDexterity } from "./rollDexterity";
import { rollIntelligence } from "./rollIntelligence";
import { rollStrength } from "./rollStrength";
import { rollWisdom } from "./rollWisdom";
import { updateHP } from "./updateHP";

export const CommandList: Command[] = [
    dwroll,
    updateHP, 
    rollStrength, rollDexterity, rollConstitution, rollIntelligence, rollWisdom, rollCharisma,
]