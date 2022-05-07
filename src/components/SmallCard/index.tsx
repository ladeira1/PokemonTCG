import { TagList } from 'components/Tag/TagList';
import { Card } from 'types/Card';
import styles from './SmallCard.module.scss';

interface SmallCardProps {
  card: Card;
}

export const SmallCard = ({ card }: SmallCardProps) => {
  return (
    <article className={styles.card}>
      <div>
        <img
          loading="lazy"
          src={card.images.small}
          alt={`Card showing the details of a Pokemon named ${card.name}`}
        />
      </div>

      <section className={styles.title} aria-labelledby={card.name}>
        <div className="row">
          <h2 id={card.name}>{card.name}</h2>
          <p>{card.id}</p>
        </div>

        <TagList tags={card?.types} />
      </section>
    </article>
  );
};
