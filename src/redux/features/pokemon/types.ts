import { Card } from 'types/Card';

export interface PokemonState {
  cards: Card[];
  isLoading: boolean;
  page: number;
  feedbackMessage?: string;
  shouldFetchMoreData: boolean;
  detailedCard?: Card;
}

export interface ListCardsPayload {
  filter: string;
}

export interface CardDetailPayload {
  id: string;
}
