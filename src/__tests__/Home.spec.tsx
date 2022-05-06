import { render, screen } from '@testing-library/react';
import Home from 'pages';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it('does not render a goodbye message', () => {
    render(<Home />);
    expect(screen.queryByText('goodbye')).not.toBeInTheDocument();
  });
});
