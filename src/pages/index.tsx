import { Button } from 'components/Button';
import { InfiniteScroller } from 'components/InfiniteScroller';
import { Input } from 'components/Input';
import { SmallCard } from 'components/SmallCard';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { fetchCards } from 'redux/thunk/fetchCards';
import styles from 'styles/pages/Home.module.scss';

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
    <div className={styles.container}>
      <Head>
        <title>Pokemon TCG</title>
        <meta name="description" content="List of Pokemon TCG cards" />
      </Head>

      <header>
        <img src="/logo.png" alt="Pokemon Trading Card Game logo" />
        <section aria-labelledby="filter-area">
          <h1 id="filter-area" className="accessibility-only">
            Filter input
          </h1>
          <Input
            value={filter}
            placeholder="Insira o nome do pokemon..."
            onChange={e => setFilter(e.target.value)}
          />
          <Button onClick={handleFetchCards}>Buscar</Button>
        </section>
      </header>

      <main className="row-overflow">
        <InfiniteScroller isLoading={isLoading} onEndReached={handleFetchCards}>
          <ul>
            {cards.map((card, index) => (
              <li key={`${card.id}-${index}`}>
                <SmallCard card={card} />
              </li>
            ))}
          </ul>
        </InfiniteScroller>
      </main>
    </div>
  );
};

export default Home;
