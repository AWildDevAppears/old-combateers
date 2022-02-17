import GameCharacterUI from "../../features/BaseCamp/Inventory/GameCharacterUI/GameCharacterUI";
import InventoryItemList from "../../features/BaseCamp/Inventory/InventoryItemList/InventoryItemList";

/**
 * Inventory and character view
 * Screen for customising a characters locadout from items in the players inventory.
 */
export default function GameInventoryView()
{
    return (
        <div className="cbtrs-inventory">
            <GameCharacterUI />
            <InventoryItemList />
        </div>
    )
}

// I can equip gear /
// I can equip only equippable items
// When I equip an item it goes into the right slot.
// When I equip an item it is removed from my inventory
// When I equip an item to a slot which already has an item, theo ld item goes back to the inventory. 