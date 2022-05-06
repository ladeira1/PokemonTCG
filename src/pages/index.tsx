import { useTranslation } from 'hooks/useTranslation';
import type { NextPage } from 'next';
import Head from 'next/head';
import { homeTranslations } from 'translations/home';

const Home: NextPage = () => {
  const { title, subtitle } = useTranslation(homeTranslations);

  return (
    <div>
      <Head>
        <title>Pokemon TCG</title>
        <meta name="description" content="List of Pokemon TCG cards" />
      </Head>

      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
};

export default Home;
