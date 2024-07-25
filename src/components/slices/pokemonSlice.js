import { createSlice } from '@reduxjs/toolkit';

// for selected pokemon
const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    selectedPokemon: null,
  },
  reducers: {
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
    clearSelectedPokemon: (state) => {
      state.selectedPokemon = null;
    },
  },
});

export const { setSelectedPokemon, clearSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
