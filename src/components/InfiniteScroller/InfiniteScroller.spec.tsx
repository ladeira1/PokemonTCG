import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { InfiniteScroller } from '.';

const onEndReached = jest.fn();
const observe = jest.fn();

const renderInfiniteScroller = () => {
  render(
    <Provider store={store}>
      <InfiniteScroller onEndReached={onEndReached}>a</InfiniteScroller>
    </Provider>,
  );
};

describe('Home test suite', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();

    mockIntersectionObserver.mockReturnValue({
      observe,
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    });

    window.IntersectionObserver = mockIntersectionObserver;
    renderInfiniteScroller();
  });

  it('should call observer', () => {
    expect(observe).toBeCalled();
  });
});
