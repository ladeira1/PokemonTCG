import { useTranslation } from 'hooks/useTranslation';
import Head from 'next/head';
import styles from 'styles/pages/CardDetails.module.scss';
import { cardDetailsTranslations } from 'translations/cardDetails';
import { MdChevronLeft } from 'react-icons/md';
import Link from 'next/link';

const CardDetails = () => {
  const { headContent } = useTranslation(cardDetailsTranslations);

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
