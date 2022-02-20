import { createSlice } from "@reduxjs/toolkit";

const initialState = {

};

export const deckBuilderSlice = createSlice({
    name: 'deckBuilder',
    initialState,
    reducers: {
        addCardToStartingDeck()
        {

        }
    },
});

export const { addCardToStartingDeck } = deckBuilderSlice.actions;
export default deckBuilderSlice.reducer;