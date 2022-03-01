import { createSlice } from "@reduxjs/toolkit";
import GameStateManager from "../../app/GameStateManager";

const initialState = {
    playerState: {
        maxHealth: 0,
        health: 0,
        maxEnergy: 0,
        energy: 0,
        deck: [],
    },
    ememyPool: {},
    currentEnemies: {},
    phases: 0,
};

export const questLoopSlice = createSlice({
    name: 'questLoop',
    initialState,
    reducers: {
        startQuest(state)
        {
            state.playerState = {
                maxHealth: GameStateManager.character.health,
                maxEnergy: GameStateManager.character.energy,
                health: GameStateManager.character.health,
                energy: GameStateManager.character.energy,
                deck: [],
            }
            return state;
        },
        enemyUseCard()
        {

        },
        playerUseCard()
        {

        },
        startCombatInstance()
        {
            
        },
        triggerDeath()
        {

        },
    },
});

export const { enemyUseCard, playerUseCard, startQuest, triggerDeath } = questLoopSlice.actions;
export default questLoopSlice.reducer;