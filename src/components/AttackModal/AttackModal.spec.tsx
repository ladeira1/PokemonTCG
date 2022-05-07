import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { mockedCard } from 'mocks/card';
import { AttackModal } from '.';

jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      locale: 'pt-BR',
      defaultLocale: 'pt-BR',
    }),
  };
});

const ref = {
  current: {
    onClose: jest.fn(),
  },
};

const renderAttackModal = () => {
  render(
    <AttackModal attack={(mockedCard.attacks as any)[0]} ref={ref as any} />,
  );
};

describe('AttackModal test suite', () => {
  beforeEach(() => renderAttackModal());

  it('should render modal items', () => {
    expect(screen.getByText('Custo:')).toBeInTheDocument();
    expect(screen.getByText('Dano:')).toBeInTheDocument();
  });

  it('should call on close when close button is pressed', async () => {
    const button = screen.getByTestId('attack-modal-close-button');

    fireEvent.click(button);
    waitFor(() => {
      expect(ref.current.onClose).toHaveBeenCalled();
    });
  });
});
