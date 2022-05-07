/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';
import { Button } from '.';
import '@testing-library/jest-dom';

const renderButton = () => {
  render(<Button onClick={() => {}}>MARCOS</Button>);
};

describe('Button test suite', () => {
  beforeEach(() => renderButton());

  it('should render its children correctly', () => {
    expect(screen.getByText('MARCOS')).toBeInTheDocument();
  });

  it('should not rend another name as children', () => {
    expect(screen.queryByText('NOT MARCOS')).not.toBeInTheDocument();
  });
});
