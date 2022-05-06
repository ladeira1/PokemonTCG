import { Card } from 'types/Card';

export interface PokemonState {
  cards: Card[];
  isLoading: boolean;
  page: number;
  feedbackMessage?: string;
}

export interface ListCardsPayload {
  filter: string;
}
