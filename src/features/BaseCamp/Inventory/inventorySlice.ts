import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GameCharacter from "../../../models/GameCharacter";
import GameItem from "../../../models/items/GameItem";
import { equipItem as charEquipItem } from '../../Globals/characterSlice';

interface IInventoryState {
    items: Array<GameItem>,
}

const initialState: IInventoryState = {
    items: [
        new GameItem( { name: 'item 1', description: '', } ),
        new GameItem( { name: 'item 2', description: '', } ),
        new GameItem( { name: 'item 3', description: '', } ),
     ],
};

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        equipItem: (state, action: PayloadAction<GameItem> ) => {
            // Delete the item from the inventory
            // Place the item on the character / tell the character slice to do this
            // Add the item that the character had equipped to this slot in the inventory.
        },
    },
})

export const { equipItem } = inventorySlice.actions;
export default inventorySlice.reducer;