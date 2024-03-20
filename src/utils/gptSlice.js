import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: true,
    movieResults: null,
    movieName: null,
  },
  reducers: {
    toggleGPTSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGPTMovies: (state, action) => {
      const { movieName, movieResults } = action.payload;
      state.movieResults = movieResults;
      state.movieName = movieName;
    },
  },
});

export const { toggleGPTSearch, addGPTMovies } = gptSlice.actions;

export default gptSlice.reducer;
