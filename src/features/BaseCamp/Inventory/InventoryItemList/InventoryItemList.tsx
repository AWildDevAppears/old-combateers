import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../app/RootStateStore';
import GameItem from '../../../../models/items/GameItem';

import InventoryItemListItem from "../InventoryItemListItem/InventoryItemListItem";

export default function InventoryItemList()
{
    const inventory = useSelector((state: RootState) => state.inventory.items);
    const ditpatch = useDispatch();
    
    return (
        <div className="list">
            { inventory.map( (item: GameItem) => ( <InventoryItemListItem item={item} /> ) ) }
        </div>
    )
}