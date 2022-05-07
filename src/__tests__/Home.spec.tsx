import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { mockedCard } from 'mocks/card';
import Home from 'pages';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      locale: 'pt-BR',
      defaultLocale: 'pt-BR',
    }),
  };
});

jest.mock('requests/api', () => {
  return {
    cardsRequest: () => ({
      data: mockedCard,
      page: 2,
      count: 1,
      totalCount: 2,
    }),
  };
});

const renderHome = () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
  );
};

const observe = jest.fn();

describe('Home test suite', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();

    mockIntersectionObserver.mockReturnValue({
      observe,
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    });

    window.IntersectionObserver = mockIntersectionObserver;
    renderHome();
  });

  it('should render Home', () => {
    const logo = screen.getByTestId('logo');

    expect(logo).toBeInTheDocument();
  });

  it('should call observer', () => {
    expect(observe).toBeCalled();
  });
});
