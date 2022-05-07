import { render, screen } from '@testing-library/react';
import { Card } from 'types/Card';
import { SmallCard } from '.';
import '@testing-library/jest-dom';

jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      locale: 'pt-BR',
      defaultLocale: 'pt-BR',
    }),
  };
});

const mockedCard: Card = {
  id: 'sm11-42',
  name: 'Abomasnow',
  types: ['Water', 'Darkness'],
  attacks: [
    {
      name: 'Quick Freeze',
      cost: ['Water', 'Colorless', 'Colorless'],
      convertedEnergyCost: 3,
      damage: '70',
      text: "If your opponent's Active Pokémon has any Water Energy attached to it, it is now Paralyzed.",
    },
    {
      name: 'Wild Tackle',
      cost: ['Water', 'Water', 'Colorless', 'Colorless'],
      convertedEnergyCost: 4,
      damage: '140',
      text: 'This Pokémon does 20 damage to itself.',
    },
  ],
  weaknesses: [
    {
      type: 'Metal',
      value: '×2',
    },
  ],
  images: {
    small: 'https://images.pokemontcg.io/sm11/42.png',
    large: 'https://images.pokemontcg.io/sm11/42_hires.png',
  },
};

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
      expect(tagLists[index]).toHaveTextContent(type);
    });
  });

  it('should not have a wrong type', () => {
    const tagLists = screen.getAllByTestId('tag');

    tagLists.forEach(tag => {
      expect(tag).not.toHaveTextContent('Fire');
    });
  });
});
