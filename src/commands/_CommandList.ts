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
import { rollCharisma } from "./rollStats/rollCharisma";
import { rollConstitution } from "./rollStats/rollConstitution";
import { rollDexterity } from "./rollStats/rollDexterity";
import { rollIntelligence } from "./rollStats/rollIntelligence";
import { rollStrength } from "./rollStats/rollStrength";
import { rollWisdom } from "./rollStats/rollWisdom";
import { updateAmmo } from "./updateStats/updateAmmo";
import { updateHP } from "./updateStats/updateHP";
import { updateRation } from "./updateStats/updateRation";
import { updateXP } from "./updateStats/updateXP";
import { bmDesafiarPerigoD } from "./basicMoves/bm-desafiarPerigo-d";
import { bmDesafiarPerigoC } from "./basicMoves/bm-desafiarPerigo-con";
import { bmDesafiarPerigoI } from "./basicMoves/bm-desafiarPerigo-i";
import { bmDesafiarPerigoS } from "./basicMoves/bm-desafiarPerigo-s";
import { bmDesafiarPerigoCar } from "./basicMoves/bm-desafiarPerigo-car";
import { bmDesafiarPerigoF } from "./basicMoves/bm-desafiarPerigo-f";
import { inflictDamage } from "./inflictDamage";
import { setDamage } from "./setStats/setDamage";

export const CommandList: Command[] = [
    dwroll, GetChar, help,
    updateHP, updateXP, updateAmmo, updateRation,
    inflictDamage,
    setDamage,
    bmMatarPilhar, bmDisparar, bmNegociar, bmDefender, bmFalarDificil, bmDiscernirRealidades, bmAjudarInterferir, 
    bmDesafiarPerigoF, bmDesafiarPerigoD, bmDesafiarPerigoC, bmDesafiarPerigoI, bmDesafiarPerigoS, bmDesafiarPerigoCar,
    rollStrength, rollDexterity, rollConstitution, rollIntelligence, rollWisdom, rollCharisma,
]