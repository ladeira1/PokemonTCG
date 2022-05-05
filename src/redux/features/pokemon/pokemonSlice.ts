import { createSlice } from '@reduxjs/toolkit';
import { PokemonState } from './types';

const initialState: PokemonState = {
  pokemons: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    listPokemons: state => {
      state.isLoading = true;
      // TO DO
    },
  },
});

export const { listPokemons } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
