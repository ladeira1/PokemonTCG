import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { useTranslation } from 'hooks/useTranslation';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { MdChevronLeft } from 'react-icons/md';
import { fetchCardDetails } from 'redux/thunk/fetchCardDetail';
import { cardDetailsRequest } from 'requests/api';
import styles from 'styles/pages/CardDetails.module.scss';
import { cardDetailsTranslations } from 'translations/cardDetails';

const CardDetails = () => {
  const { detailedCard } = useAppSelector(state => state.pokemon);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { headContent } = useTranslation(cardDetailsTranslations);

  const { id } = router.query;

  console.log(detailedCard);

  useEffect(() => {
    if (id) dispatch(fetchCardDetails({ id: id as string }));
  }, [id]);

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
          <img
            data-testid="logo"
            src="/logo.png"
            alt="Pokemon Trading Card Game logo"
          />
        </div>
      </header>
    </div>
  );
};

export default CardDetails;
