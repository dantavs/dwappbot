import { Command } from "../interfaces/Command";
import { bmAjudarInterferir } from "./basicMoves/bm-ajudarInterferir";
import { bmDefender } from "./basicMoves/bm-defender";
import { bmDiscernirRealidades } from "./basicMoves/bm-discernirRealidades";
import { bmDisparar } from "./basicMoves/bm-disparar";
import { bmFalarDificil } from "./basicMoves/bm-falarDificil";
import { bmMatarPilhar } from "./basicMoves/bm-matarPilhar";
import { bmNegociar } from "./basicMoves/bm-negociar";
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
    bmMatarPilhar, bmDisparar, bmNegociar, bmDefender, bmFalarDificil, bmDiscernirRealidades, bmAjudarInterferir,
    rollStrength, rollDexterity, rollConstitution, rollIntelligence, rollWisdom, rollCharisma,
]