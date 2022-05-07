import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { mockedCard } from 'mocks/card';
import CardDetails from 'pages/card/[id]';
import { act } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      locale: 'pt-BR',
      defaultLocale: 'pt-BR',
      query: {
        id: mockedCard.id,
      },
    }),
  };
});

jest.mock('requests/api', () => {
  return {
    cardDetailsRequest: () => ({
      data: mockedCard,
    }),
  };
});

const renderCardDetails = () => {
  render(
    <Provider store={store}>
      <CardDetails />
    </Provider>,
  );
};

describe('Home test suite', () => {
  beforeEach(async () => {
    await act(async () => {
      renderCardDetails();
    });
  });

  it('should render CardDetails', () => {
    const logo = screen.getByTestId('logo');

    expect(logo).toBeInTheDocument();
  });

  it('should render the detailed card', async () => {
    const card = await screen.findByTestId('detailed-card');

    expect(card).toBeInTheDocument();
    expect(card).toContainHTML(mockedCard.name);
  });
});
