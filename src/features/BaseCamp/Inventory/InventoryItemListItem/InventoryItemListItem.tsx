import { useEffect, useRef } from "react";
import { useAppDispatch } from "../../../../app/hooks";
import ItemLookup from "../../../../data/Items";
import { equipItem } from "../inventorySlice";

interface IProps {
    item: string
    idx: number
    isSelected: boolean
    setSelected: (idx: number) => void
}


export default function InventoryItemListItem( props: IProps )
{
    const dispatch = useAppDispatch();
    const controlsRef = useRef<HTMLUListElement>(null);
    let itemObject = ItemLookup.getItem(props.item);

    const toggleItemControls = () => {
        props.setSelected(props.idx);
    }

    // Actions
    const handleEquipItem = () => {
        dispatch(equipItem({ id: props.item, idx: props.idx }));
        props.setSelected(-1);
    }
   
    useEffect( () => {
        itemObject = ItemLookup.getItem(props.item);
        const action = props.isSelected ? 'remove' : 'add';
        controlsRef.current?.classList[action]('hide');
    } )

    const equipButton = itemObject?.equip ? (<li onClick={handleEquipItem}>Equip</li>) : undefined;

    return (
        <div
            className="inventory__list-item"
        >
            <span onClick={toggleItemControls}>
                <h3>{itemObject?.name}</h3>
                <p>{itemObject?.description}</p>
            </span>
     

            <ul className="inventory__list-item__stats">
            </ul>

            <ul
                ref={controlsRef}
                className="inventory__list-item__controls hide" 
            >
                {equipButton}
                <li>Destroy</li>
            </ul>
        </div>
    );
}