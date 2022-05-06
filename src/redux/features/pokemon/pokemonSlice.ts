import { createSlice } from '@reduxjs/toolkit';
import { fetchCards } from 'redux/thunk/fetchCards';
import { PokemonState } from './types';

const initialState: PokemonState = {
  cards: [],
  isLoading: false,
  page: 1,
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCards.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = action.payload.data;
      state.page = action.payload.page;
      state.isLoading = false;
    });

    builder.addCase(fetchCards.rejected, state => {
      state.feedbackMessage = 'Algum erro ocorreu ao buscar os dados';
    });
  },
});

export const pokemonReducer = pokemonSlice.reducer;
