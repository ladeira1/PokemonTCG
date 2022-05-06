import { createSlice } from '@reduxjs/toolkit';
import { fetchCards } from 'redux/thunk/fetchCards';
import { PokemonState } from './types';

const initialState: PokemonState = {
  cards: [],
  isLoading: false,
  page: 1,
  shouldFetchMoreData: true,
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
      if (action.payload === undefined) return;
      state.cards = [...state.cards, ...action.payload.data];
      state.page = action.payload.page + 1;
      state.isLoading = false;

      if (
        action.payload.count * action.payload.page >=
        action.payload.totalCount
      ) {
        state.shouldFetchMoreData = false;
      }
    });

    builder.addCase(fetchCards.rejected, state => {
      state.feedbackMessage = 'Algum erro ocorreu ao buscar os dados';
      state.isLoading = false;
    });
  },
});

export const pokemonReducer = pokemonSlice.reducer;
