import { Button } from 'components/Button';
import { InfiniteScroller } from 'components/InfiniteScroller';
import { Input } from 'components/Input';
import { SmallCard } from 'components/SmallCard';
import { Spinner } from 'components/Spinner';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { useTranslation } from 'hooks/useTranslation';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { resetCardsState } from 'redux/features/pokemon/pokemonSlice';
import { fetchCards } from 'redux/thunk/fetchCards';
import styles from 'styles/pages/Home.module.scss';
import { homeTranslations } from 'translations/home';

const Home: NextPage = () => {
  const { cards, isLoading, shouldFetchMoreData } = useAppSelector(
    state => state.pokemon,
  );

  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState('');

  const { filterInputPlaceholder, search, headContent } =
    useTranslation(homeTranslations);

  const handleFetchCards = () => {
    if (!isLoading && shouldFetchMoreData) {
      dispatch(fetchCards({ filter }));
    }
  };

  const handleReset = () => {
    dispatch(resetCardsState());
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon TCG</title>
        <meta name="description" content={headContent} />
      </Head>

      <header>
        <img src="/logo.png" alt="Pokemon Trading Card Game logo" />
        <section aria-labelledby="filter-area">
          <h1 id="filter-area" className="accessibility-only">
            Filter input
          </h1>
          <div>
            <Input
              value={filter}
              placeholder={filterInputPlaceholder}
              onChange={e => setFilter(e.target.value)}
            />
            <Button onClick={handleReset}>{search}</Button>
          </div>
        </section>
      </header>

      <main>
        <InfiniteScroller onEndReached={handleFetchCards}>
          {cards?.length > 0 && (
            <ul>
              {cards.map((card, index) => (
                <li key={`${card.id}-${index}`}>
                  <SmallCard card={card} />
                </li>
              ))}
            </ul>
          )}
          {isLoading && <Spinner />}
        </InfiniteScroller>
      </main>
    </div>
  );
};

export default Home;
