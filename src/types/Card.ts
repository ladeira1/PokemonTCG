export interface Card {
  id: string;
  name: string;
  types?: PokemonType[];
  weaknesses?: Weakness[];
  resistances?: Resistance[];
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

export interface Weakness {
  type: PokemonType;
  value: string;
}

export type Resistance = Weakness;

export interface Attack {
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
