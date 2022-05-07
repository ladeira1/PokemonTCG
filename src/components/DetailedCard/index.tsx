import { Attack, Card } from 'types/Card';
import { TagList } from 'components/Tag/TagList';
import { Button } from 'components/Button';
import { useRef, useState } from 'react';
import { Spinner } from 'components/Spinner';
import { AttackModal } from 'components/AttackModal';
import styles from './DetailedCard.module.scss';

interface DetailedCardProps {
  card: Card;
}

export const DetailedCard = ({ card }: DetailedCardProps) => {
  const attackModalRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAttack, setSelectedAttack] = useState<Attack>();

  const handleClick = (attack: Attack) => {
    setSelectedAttack(attack);
    attackModalRef?.current?.onOpen();
  };

  return (
    <article className={styles.container}>
      <section className={styles.imageContainer} aria-labelledby="card-image">
        <h1 className="accessibilityOnly" id="card-image">
          Card Image
        </h1>
        <img
          className={styles.image}
          src={card.images.large}
          alt={`${card.name} large card`}
          onLoad={() => setIsLoading(false)}
        />
      </section>
      {isLoading ? (
        <Spinner />
      ) : (
        <section
          className={styles.detailsContainer}
          aria-labelledby={card.name}
        >
          <div className={`row ${styles.title}`}>
            <h2 id={card.name}>{card.name}</h2>
            <p className={styles.id}>{card.id}</p>
          </div>

          <TagList
            title={`Tipo${
              card.resistances && card.resistances?.length > 1 ? 's' : ''
            }`}
            tags={card.types}
          />
          <TagList
            title={`Resistência${
              card.resistances && card.resistances?.length > 1 ? 's' : ''
            }`}
            tags={card.resistances}
            valueColor="Resistance"
          />
          <TagList
            title={`Fraqueza${
              card.resistances && card.resistances?.length > 1 ? 's' : ''
            }`}
            tags={card.weaknesses}
            valueColor="Weakness"
          />

          <section
            aria-labelledby="attacks"
            className={styles.attacksContainer}
          >
            <h3 className="tagListTitle" id="attacks">
              Ataques
            </h3>
            <ul>
              {card.attacks?.map(attack => (
                <li key={attack.name}>
                  <Button onClick={() => handleClick(attack)}>
                    {attack.name}
                  </Button>
                </li>
              ))}
            </ul>
          </section>
        </section>
      )}

      <AttackModal attack={selectedAttack} ref={attackModalRef} />
    </article>
  );
};
