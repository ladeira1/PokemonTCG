import { mockedCard } from 'mocks/card';
import {
  pokemonReducer,
  resetCardsState,
  resetCardsFeedbackMessage,
  initialState,
} from './pokemonSlice';

jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      locale: 'pt-BR',
      defaultLocale: 'pt-BR',
    }),
  };
});

describe('PokemonSlice test suite', () => {
  it('should return the initial state', () => {
    expect(pokemonReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should reset card feedback message', () => {
    const previousState = {
      ...initialState,
      feedbackMessage: 'error',
    };

    expect(pokemonReducer(previousState, {} as any)).toEqual(previousState);
    expect(pokemonReducer(previousState, resetCardsFeedbackMessage())).toEqual(
      initialState,
    );
  });

  it('should reset all states to initial State', () => {
    const previousState = {
      cards: [mockedCard],
      isLoading: true,
      page: 4,
      shouldFetchMoreData: false,
      feedbackMessage: 'error',
    };

    expect(pokemonReducer(previousState, {} as any)).toEqual(previousState);
    expect(pokemonReducer(previousState, resetCardsState())).toEqual(
      initialState,
    );
  });
});
