import { createAsyncThunk } from '@reduxjs/toolkit';
import { PokemonState, ListCardsPayload } from 'redux/features/pokemon/types';
import { cardsRequest } from 'requests/api';

export const fetchCards = createAsyncThunk(
  'cards/list',
  async ({ filter }: ListCardsPayload, thunkAPI) => {
    const state = thunkAPI.getState();
    const { page } = (state as { pokemon: PokemonState }).pokemon;

    return cardsRequest(page, filter);
  },
);
