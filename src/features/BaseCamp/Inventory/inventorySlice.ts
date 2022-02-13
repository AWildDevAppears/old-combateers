import { createSlice } from "@reduxjs/toolkit";
import GameCharacter from "../../../models/GameCharacter";
import GameItem from "../../../models/items/GameItem";

interface IInventoryState {
    items: Array<GameItem>,
    character: GameCharacter | null,
}

const initialState: IInventoryState = {
    items: [],
    character: null,
};

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        equipItem: state => {

        },
    },
})

export const { equipItem } = inventorySlice.actions;
export default inventorySlice.reducer;