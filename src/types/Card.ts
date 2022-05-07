export interface Card {
  id: string;
  name: string;
  types?: PokemonType[];
  weaknesses?: Weakness[];
  resistances?: Resistances[];
  attacks?: Attack[];
  images: CardImage;
}

export type PokemonType =
  | 'Colorless'
  | 'Darkness'
  | 'Dragon'
  | 'Fairy'
  | 'Fighting'
  | 'Fire'
  | 'Grass'
  | 'Lightning'
  | 'Metal'
  | 'Psychic'
  | 'Water';

interface Weakness {
  type: string;
  value: string;
}

type Resistances = Weakness;

interface Attack {
  name: string;
  cost: PokemonType[];
  convertedEnergyCost: number;
  damage: string;
  text: string;
}

interface CardImage {
  small: string;
  large: string;
}
