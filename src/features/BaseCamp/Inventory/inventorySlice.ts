import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import GameStateManager from "../../../app/GameStateManager";
import ItemLookup, { eItemType } from "../../../data/Items";

interface IInventoryState {
    items: string[]
    health: number
    energy: number
    armorHelmet: string | null
    armorChest: string | null
    armorLegwear: string | null
    armorGauntlets: string | null
    armorBoots: string | null
}

const initialState: IInventoryState = {
    items: GameStateManager.inventory,
    health: GameStateManager.character.health,
    energy: GameStateManager.character.energy,
    armorHelmet: GameStateManager.character.armorHelmet,
    armorChest: GameStateManager.character.armorChest,
    armorLegwear: GameStateManager.character.armorLegwear,
    armorGauntlets: GameStateManager.character.armorGauntlets,
    armorBoots: GameStateManager.character.armorBoots,
};

export interface IEquipItemPayload {
    id: string,
    idx: number,
}

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        equipItem: (state, action: PayloadAction<IEquipItemPayload> ) => {
            const itemType = ItemLookup.getItemType( action.payload.id );
            // Delete the item from the inventory
            // Place the item on the character / tell the character slice to do this
            // Add the item that the character had equipped to this slot in the inventory.

            const id = action.payload.id;
            let currentlyInSlot: string | null = null;

            switch( itemType )
            {
                case eItemType.HELMET:
                    currentlyInSlot = state.armorHelmet;
                    state.armorHelmet = id;
                    GameStateManager.character.armorHelmet = state.armorHelmet;
                    break;
                case eItemType.CHEST:
                    currentlyInSlot = state.armorChest;
                    state.armorChest = id;
                    GameStateManager.character.armorChest = state.armorChest;
                    break;
                case eItemType.LEGWEAR:
                    currentlyInSlot = state.armorLegwear;
                    state.armorLegwear = id;
                    GameStateManager.character.armorLegwear = state.armorLegwear;
                    break;
                case eItemType.GAUNTLETS:
                    currentlyInSlot = state.armorGauntlets;
                    state.armorGauntlets = id;
                    GameStateManager.character.armorGauntlets = state.armorGauntlets;
                    break;
                case eItemType.BOOTS:
                    currentlyInSlot = state.armorBoots;
                    state.armorBoots = id;
                    GameStateManager.character.armorBoots = state.armorBoots;
                    break;
                default:
                    throw new Error(`Cannot Equip item, ${itemType} - ${id}`);
                    return;
            }        

            if (currentlyInSlot !== null) {
                state.items.splice( action.payload.idx, 1, currentlyInSlot);
                return;
            }

            state.items.splice( action.payload.idx, 1);
        },
    },
})

export const { equipItem } = inventorySlice.actions;
export default inventorySlice.reducer;