# dwappbot
Discord bot to support Dungeon World plays

## Main commands
/dwr <modifier (optional)> : Roll 2d6 + modifier
/pc : Show the PC registered for the user
/damage <modifier (optional)> : Inflict PC's damage

## Stats commands (Better with character created in the channel)
/str <modifier: optional> : Roll + Strength + Modifier (if there is no PC registered, it assumed 0 as Strength value)
/dex <modifier: optional> : Roll + Dexterity + Modifier (if there is no PC registered, it assumed 0 as Dexterity value)
/con <modifier: optional> : Roll + Constitution + Modifier (if there is no PC registered, it assumed 0 as Constitution value)
/int <modifier: optional> : Roll + Intelligence + Modifier (if there is no PC registered, it assumed 0 as Intelligence value)
/wis <modifier: optional> : Roll + Wisdom + Modifier (if there is no PC registered, it assumed 0 as Wisdom value)
/cha <modifier: optional> : Roll + Charisma + Modifier (if there is no PC registered, it assumed 0 as Charisma value)

## Movimentos Básicos (Funciona melhor com personagem criado no canal)
/matar <modifier: opcional> : Executa o movimento básico Matar e Pilhar
/disparar <modifier: opcional> : Executa o movimento básico Disparar
/negociar <modifier: opcional> : Executa o movimento básico Negociar
/defender <modifier: opcional> : Executa o movimento básico Defender
/falar <modifier: opcional> : Executa o movimento básico Falar Difícil
/discernir <modifier: opcional> : Executa o movimento básico Discernir Realidades
/ajudar <modifier: opcional> : Executa o movimento básico Ajudar ou Interferir
/desafiar<atributo> <modifier: opcional> : Executa o movimento básico Desafiar o Perigo. A última letra do comando, é o atributo a ser utilizado. Ex.: /desafiarf (Força)

## Update commands (Requires character created)
/updthp <modifier: required> : Add or subtract the Modifier of Hit Points value, retricted by the maximum value
/updtxp <modifier: required> : Add or subtract the Modifier of the PC's XP
/updtammo <modifier: required> : Add or subtract the Modifier of the PC's Ammo
/updtr <modifier: required> : Add or subtract the Modifier of the PC's Rations

## Define new value for stats commands (Requires character created)
/setdamage <modifier: required> : Define new value for the PC's damage
