-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_characters" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "experience" INTEGER NOT NULL,
    "hitPoints" INTEGER NOT NULL,
    "damage" INTEGER NOT NULL DEFAULT 4,
    "maxHP" INTEGER NOT NULL DEFAULT 0,
    "alignment" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "playerName" TEXT NOT NULL,
    "strength" INTEGER NOT NULL DEFAULT 0,
    "modStr" INTEGER NOT NULL DEFAULT 0,
    "dexterity" INTEGER NOT NULL DEFAULT 0,
    "modDex" INTEGER NOT NULL DEFAULT 0,
    "constitution" INTEGER NOT NULL DEFAULT 0,
    "modCon" INTEGER NOT NULL DEFAULT 0,
    "intelligence" INTEGER NOT NULL DEFAULT 0,
    "modInt" INTEGER NOT NULL DEFAULT 0,
    "wisdom" INTEGER NOT NULL DEFAULT 0,
    "modWis" INTEGER NOT NULL DEFAULT 0,
    "charisma" INTEGER NOT NULL DEFAULT 0,
    "modCha" INTEGER NOT NULL DEFAULT 0,
    "ammo" INTEGER NOT NULL DEFAULT 0,
    "maxAmoo" INTEGER NOT NULL DEFAULT 0,
    "ration" INTEGER NOT NULL DEFAULT 0,
    "portrait" TEXT NOT NULL DEFAULT '',
    "channelId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_characters" ("alignment", "ammo", "channelId", "charisma", "class", "constitution", "createdAt", "dexterity", "experience", "hitPoints", "id", "intelligence", "level", "maxAmoo", "maxHP", "modCha", "modCon", "modDex", "modInt", "modStr", "modWis", "name", "playerId", "playerName", "portrait", "race", "ration", "strength", "wisdom") SELECT "alignment", "ammo", "channelId", "charisma", "class", "constitution", "createdAt", "dexterity", "experience", "hitPoints", "id", "intelligence", "level", "maxAmoo", "maxHP", "modCha", "modCon", "modDex", "modInt", "modStr", "modWis", "name", "playerId", "playerName", "portrait", "race", "ration", "strength", "wisdom" FROM "characters";
DROP TABLE "characters";
ALTER TABLE "new_characters" RENAME TO "characters";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
