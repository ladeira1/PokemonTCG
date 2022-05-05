import { configureStore } from '@reduxjs/toolkit';
import { pokemonReducer } from './features/pokemon/pokemonSlice';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
