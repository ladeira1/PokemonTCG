/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';
import { Input } from '.';
import '@testing-library/jest-dom';

const renderInput = () => {
  render(<Input value="marcos" onChange={() => {}} />);
};

describe('Input test suite', () => {
  beforeEach(() => renderInput());

  it('should render with the correct value', () => {
    const input = screen.getByTestId('input');

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('marcos');
  });
});
