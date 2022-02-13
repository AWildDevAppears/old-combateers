import GameArmor from "./items/GameArmor";
import GameWeapon from "./items/GameWeapon";


export default interface IGameCharacter {
    health: number
    energy: number

    // Weapon to buff damage / add special effects to cards.
    weapon: GameWeapon | null
    
    // Armor to negate damage / add special effects to cards
    armorChest: GameArmor | null
    armorHelmet: GameArmor | null
    armorBoots: GameArmor | null
    armorGauntlets: GameArmor | null
    armorLegwear: GameArmor | null

    // Trinkets are aror pieces that usually don't have any defence but do have multiple modifiers for cards.
    trinket: GameArmor | null
}