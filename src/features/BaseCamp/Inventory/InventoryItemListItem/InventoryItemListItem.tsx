import { useRef } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import { AppDispatch } from "../../../../app/RootStateStore";

import GameItem from "../../../../models/items/GameItem";
import { equipItem } from "../inventorySlice";

interface IProps {
    item: GameItem
}

export default function InventoryItemListItem( props: IProps )
{
    const dispatch = useAppDispatch();
    const controlsRef = useRef<HTMLUListElement>(null);

    const toggleItemControls = () => {
        controlsRef.current?.classList.toggle('hide');
    }

    // Actions
    const handleEquipItem = () => dispatch(equipItem(props.item));

    return (
        <div
            className="inventory__list-item"
            onClick={toggleItemControls}
        >
            <h3>{props.item.name}</h3>
            <p>{props.item.description}</p>

            <ul className="inventory__list-item__stats">
            </ul>

            <ul
                ref={controlsRef}
                className="inventory__list-item__controls hide" 
            >
                <li onClick={handleEquipItem}>Equip</li>
                <li>Destroy</li>
            </ul>
        </div>
    );
}