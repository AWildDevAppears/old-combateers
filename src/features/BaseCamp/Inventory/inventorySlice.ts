import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GameStateManager from "../../../app/GameStateManager";

interface IInventoryState {
    items: string[]
    health: number
    energy: number
    armorChest: string | null
}

const initialState: IInventoryState = {
    items: GameStateManager.inventory,
    health: GameStateManager.character.health,
    energy: GameStateManager.character.energy,
    armorChest: GameStateManager.character.armorChest,
};

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        equipItem: (state, action: PayloadAction<string> ) => {
            // Delete the item from the inventory
            // Place the item on the character / tell the character slice to do this
            // Add the item that the character had equipped to this slot in the inventory.
            state.armorChest = action.payload;
        },
    },
})

export const { equipItem } = inventorySlice.actions;
export default inventorySlice.reducer;