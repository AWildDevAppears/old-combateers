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
