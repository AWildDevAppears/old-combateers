import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IGameCharacter from "../../models/GameCharacter";
import GameItem from "../../models/items/GameItem";


const initialState: IGameCharacter = {
    health: 100,
    energy: 100,
    weapon: null,
    armorChest: null,
    armorHelmet: null,
    armorBoots: null,
    armorGauntlets: null,
    armorLegwear: null,
    trinket: null
};

export const characterSlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        equipItem: (state, action: PayloadAction<GameItem> ) => {
            state.armorChest = action.payload;
        },
    },
})

export const { equipItem } = characterSlice.actions;
export default characterSlice.reducer;