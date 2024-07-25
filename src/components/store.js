import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './slices/pokemonSlice';
import authRducer from './slices/auth.js';

const store = configureStore({
  reducer: {
    pokemon: pokemonReducer, // for clicked pokemon data
    auth: authRducer, // for login credentials
  },
});

export default store;
