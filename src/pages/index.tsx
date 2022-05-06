import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { fetchCards } from 'redux/thunk/fetchCards';

const Home: NextPage = () => {
  const { cards } = useAppSelector(state => state.pokemon);
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchCards({ filter }));
  }, []);

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

      <div>
        {cards.map(item => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Home;
