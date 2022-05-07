import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { mockedCard } from 'mocks/card';
import { pokemonTypeTransalation } from 'translations/pokemonType';
import { SmallCard } from '.';

jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      locale: 'pt-BR',
      defaultLocale: 'pt-BR',
    }),
  };
});

const translatedValue = pokemonTypeTransalation['pt-BR'];

const renderSmallCard = () => {
  render(<SmallCard card={mockedCard} />);
};

describe('SmallCard test suite', () => {
  beforeEach(() => renderSmallCard());

  it('should render with the correct name and id', () => {
    const smallCard = screen.getByTestId('small-card');

    expect(smallCard).toBeInTheDocument();
    expect(screen.getByText(mockedCard.name)).toBeInTheDocument();
    expect(screen.getByText(mockedCard.id)).toBeInTheDocument();
  });

  it('should render the correct type quantity', () => {
    const tagLists = screen.getAllByTestId('tag');

    expect(tagLists).toHaveLength(2);

    mockedCard.types?.forEach((type, index) => {
      expect(tagLists[index]).toHaveTextContent(translatedValue[type]);
    });
  });

  it('should not have a wrong type', () => {
    const tagLists = screen.getAllByTestId('tag');

    tagLists.forEach(tag => {
      expect(tag).not.toHaveTextContent('Fire');
    });
  });

  it('should have the correct link', () => {
    const anchor = screen.getByTestId('small-card-anchor');

    expect(anchor).toHaveAttribute('href', `/card/${mockedCard.id}`);
  });
});
