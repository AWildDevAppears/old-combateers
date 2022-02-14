import GameArmor from "./items/GameArmor";
import GameWeapon from "./items/GameWeapon";


export default interface IGameCharacter {
    health: number
    energy: number

    // Weapon to buff damage / add special effects to cards.
    weapon: string | null
    
    // Armor to negate damage / add special effects to cards
    armorChest: string | null
    armorHelmet: string | null
    armorBoots: string | null
    armorGauntlets: string | null
    armorLegwear: string | null

    // Trinkets are aror pieces that usually don't have any defence but do have multiple modifiers for cards.
    trinket: string | null
}