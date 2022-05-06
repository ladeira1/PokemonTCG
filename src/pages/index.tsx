import { InfiniteScroller } from 'components/InfiniteScroller';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { fetchCards } from 'redux/thunk/fetchCards';

const Home: NextPage = () => {
  const { cards, isLoading } = useAppSelector(state => state.pokemon);

  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState('');

  const handleFetchCards = () => {
    if (!isLoading) {
      dispatch(fetchCards({ filter }));
    }
  };

  return (
    <div>
      <Head>
        <title>Pokemon TCG</title>
        <meta name="description" content="List of Pokemon TCG cards" />
      </Head>

      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />

      <ul>
        <InfiniteScroller onEndReached={handleFetchCards} isLoading={isLoading}>
          {cards.map(item => (
            <li key={item.id}>
              <p>{item.name}</p>
            </li>
          ))}
        </InfiniteScroller>
      </ul>
    </div>
  );
};

export default Home;
