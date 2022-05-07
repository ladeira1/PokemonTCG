import { createAsyncThunk } from '@reduxjs/toolkit';
import { CardDetailPayload } from 'redux/features/pokemon/types';
import { cardDetailsRequest } from 'requests/api';

export const fetchCardDetails = createAsyncThunk(
  'cards/id',
  async ({ id }: CardDetailPayload) => {
    return cardDetailsRequest(id);
  },
);
