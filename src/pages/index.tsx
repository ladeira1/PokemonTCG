import { Button } from 'components/Button';
import { InfiniteScroller } from 'components/InfiniteScroller';
import { Input } from 'components/Input';
import { SmallCard } from 'components/SmallCard';
import { Spinner } from 'components/Spinner';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { useToast } from 'hooks/useToast';
import { useTranslation } from 'hooks/useTranslation';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import {
  resetCardsFeedbackMessage,
  resetCardsState,
} from 'redux/features/pokemon/pokemonSlice';
import { fetchCards } from 'redux/thunk/fetchCards';
import styles from 'styles/pages/Home.module.scss';
import { homeTranslations } from 'translations/home';

const Home: NextPage = () => {
  const { cards, isLoading, shouldFetchMoreData, feedbackMessage } =
    useAppSelector(state => state.pokemon);

  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState('');

  const {
    filterInputPlaceholder,
    logoAlt,
    search,
    headContent,
    requestError,
    noCardFound,
  } = useTranslation(homeTranslations);

  const { error } = useToast();

  const handleFetchCards = () => {
    if (!isLoading && shouldFetchMoreData) {
      dispatch(fetchCards({ filter }));
    }
  };

  const handleReset = () => {
    dispatch(resetCardsState());
  };

  useEffect(() => {
    if (feedbackMessage) {
      error(requestError);
      dispatch(resetCardsFeedbackMessage());
    }
  }, [feedbackMessage]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon TCG</title>
        <meta name="description" content={headContent} />
      </Head>

      <header>
        <img data-testid="logo" src="/logo.png" alt={logoAlt} />
        <section aria-labelledby="filter-area">
          <h1 id="filter-area" className="accessibilityOnly">
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
          {cards?.length === 0 && !shouldFetchMoreData && (
            <p data-testid="home-no-card-found" className={styles.noCardFound}>
              {noCardFound}
            </p>
          )}
          {isLoading && <Spinner />}
        </InfiniteScroller>
      </main>
    </div>
  );
};

export default Home;
