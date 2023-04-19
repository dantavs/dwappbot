import { Command } from "../interfaces/Command";
import { dwroll } from "./dwRoll";
import { rollCharisma } from "./rollCharisma";
import { rollConstitution } from "./rollConstitution";
import { rollDexterity } from "./rollDexterity";
import { rollIntelligence } from "./rollIntelligence";
import { rollStrength } from "./rollStrength";
import { rollWisdom } from "./rollWisdom";

export const CommandList: Command[] = [
    dwroll, rollStrength, rollDexterity, rollConstitution, rollIntelligence, rollWisdom, rollCharisma
]