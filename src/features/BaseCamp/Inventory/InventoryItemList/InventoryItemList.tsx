import { useAppSelector } from '../../../../app/hooks';
import { RootState } from '../../../../app/RootStateStore';
import GameItem from '../../../../models/items/GameItem';

import InventoryItemListItem from "../InventoryItemListItem/InventoryItemListItem";

export default function InventoryItemList()
{
    const { items } = useAppSelector((state: RootState) => state.inventory);

    return (
        <div className="list">
            { items.map( (item: GameItem, idx: number) => ( <InventoryItemListItem key={idx} item={item} /> ) ) }
        </div>
    )
}