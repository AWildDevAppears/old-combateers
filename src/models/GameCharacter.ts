import GameArmor from "./items/GameArmor";
import GameWeapon from "./items/GameWeapon";


export default class GameCharacter {
    // Weapon to buff damage / add special effects to cards.
    weapon: GameWeapon | null = null;
    
    // Armor to negate damage / add special effects to cards
    armorChest: GameArmor | null = null;
    armorHelmet: GameArmor | null = null;
    armorBoots: GameArmor | null = null;
    armorGauntlets: GameArmor | null = null;
    armorLegwear: GameArmor | null = null;

    // Trinkets are aror pieces that usually don't have any defence but do have multiple modifiers for cards.
    trinket: GameArmor | null = null;
}