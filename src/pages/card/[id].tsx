import { DetailedCard } from 'components/DetailedCard';
import { Spinner } from 'components/Spinner';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { useToast } from 'hooks/useToast';
import { useTranslation } from 'hooks/useTranslation';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MdChevronLeft } from 'react-icons/md';
import { resetCardsFeedbackMessage } from 'redux/features/pokemon/pokemonSlice';
import { fetchCardDetails } from 'redux/thunk/fetchCardDetail';
import styles from 'styles/pages/CardDetails.module.scss';
import { cardDetailsTranslations } from 'translations/cardDetails';

const CardDetails = () => {
  const { detailedCard, isLoading, feedbackMessage } = useAppSelector(
    state => state.pokemon,
  );
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { headContent } = useTranslation(cardDetailsTranslations);

  const { error } = useToast();

  const { id } = router.query;

  useEffect(() => {
    if (id) dispatch(fetchCardDetails({ id: id as string }));
  }, [id]);

  useEffect(() => {
    if (feedbackMessage) {
      error(feedbackMessage);
      dispatch(resetCardsFeedbackMessage());
      router.back();
    }
  }, [feedbackMessage]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon TCG</title>
        <meta name="description" content={headContent} />
      </Head>

      <header>
        <Link passHref href="/">
          <a className={styles.link}>
            <MdChevronLeft />
          </a>
        </Link>

        <div className={styles.imageContainer}>
          <Link passHref href="/">
            <a className={styles.link}>
              <img
                data-testid="logo"
                src="/logo.png"
                alt="Pokemon Trading Card Game logo"
              />
            </a>
          </Link>
        </div>
      </header>

      <main>
        {detailedCard && !isLoading && <DetailedCard card={detailedCard} />}
        {isLoading && <Spinner />}
      </main>
    </div>
  );
};

export default CardDetails;
