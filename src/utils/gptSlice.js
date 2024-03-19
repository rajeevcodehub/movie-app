import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: true,
        gptMovies: []
    },
    reducers: {
        toggleGPTSearch: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGPTMovies: (state, action) => {
            state.gptMovies = action.payload;
        }
    }
})

export const { toggleGPTSearch, addGPTMovies } = gptSlice.actions;

export default gptSlice.reducer;