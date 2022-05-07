import { Card } from 'types/Card';

export const mockedCard: Card = {
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
