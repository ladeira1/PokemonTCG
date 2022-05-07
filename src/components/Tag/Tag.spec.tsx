/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';
import { PokemonType } from 'types/Card';
import { Tag } from '.';
import '@testing-library/jest-dom';

const renderTag = (type: PokemonType = 'Fairy') => {
  render(<Tag type={type} />);
};

describe('Tag test suite', () => {
  beforeEach(() => renderTag());

  it('should render with the right class', () => {
    const tag = screen.getByTestId('tag');

    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('color-Fairy');
  });

  it('should not render another class', () => {
    const tag = screen.getByTestId('tag');

    expect(tag).toBeInTheDocument();
    expect(tag).not.toHaveClass('color-Fighter');
  });
});
