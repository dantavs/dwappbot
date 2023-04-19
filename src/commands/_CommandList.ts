import { Command } from "../interfaces/Command";
import { dwroll } from "./dwRoll";
import { rollStrength } from "./rollStrength";

export const CommandList: Command[] = [
    dwroll, rollStrength
]