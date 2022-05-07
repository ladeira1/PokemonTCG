import { render, screen } from '@testing-library/react';
import { Button } from '.';
import '@testing-library/jest-dom';

const onClick = jest.fn();

const renderButton = () => {
  render(<Button onClick={onClick}>MARCOS</Button>);
};

describe('Button test suite', () => {
  beforeEach(() => renderButton());

  it('should render its children correctly', () => {
    expect(screen.getByText('MARCOS')).toBeInTheDocument();
  });

  it('should not rend another name as children', () => {
    expect(screen.queryByText('NOT MARCOS')).not.toBeInTheDocument();
  });

  it('should call onClick', () => {
    const button = screen.getByText('MARCOS');

    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
