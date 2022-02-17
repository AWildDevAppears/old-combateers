import { useState } from 'react';
import { useAppSelector } from '../../../../app/hooks';
import { RootState } from '../../../../app/RootStateStore';
import GameItem from '../../../../models/items/GameItem';

import InventoryItemListItem from "../InventoryItemListItem/InventoryItemListItem";

export default function InventoryItemList()
{
    const { items } = useAppSelector((state: RootState) => state.inventory);
    const [ selected, setSelected ] = useState(-1);

    return (
        <div className="list">
            { items.map( (item: string, idx: number) => ( 
                <InventoryItemListItem 
                    key={idx} 
                    item={item} 
                    idx={idx} 
                    setSelected={setSelected}
                    isSelected={selected === idx}
                /> 
            ) ) }
        </div>
    )
}