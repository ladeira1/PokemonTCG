import { TagList } from 'components/Tag/TagList';
import { useTranslation } from 'hooks/useTranslation';
import { smallCardTranslations } from 'translations/smallCard';
import { Card } from 'types/Card';
import styles from './SmallCard.module.scss';

interface SmallCardProps {
  card: Card;
}

export const SmallCard = ({ card }: SmallCardProps) => {
  const { imageAlt } = useTranslation(smallCardTranslations);

  return (
    <article data-testid="small-card" className={styles.card}>
      <div>
        <img
          loading="lazy"
          src={card.images.small}
          alt={`${imageAlt} ${card.name}`}
        />
      </div>

      <section className={styles.title} aria-labelledby={card.name}>
        <div className="row">
          <h2 id={card.name}>{card.name}</h2>
          <p className={styles.id}>{card.id}</p>
        </div>

        <TagList tags={card?.types} />
      </section>
    </article>
  );
};
