import { Attack, Card } from 'types/Card';
import { TagList } from 'components/Tag/TagList';
import { Button } from 'components/Button';
import { useRef, useState } from 'react';
import { Spinner } from 'components/Spinner';
import { AttackModal } from 'components/AttackModal';
import { useTranslation } from 'hooks/useTranslation';
import { detailedCardTranslations } from 'translations/detailedCard';
import styles from './DetailedCard.module.scss';

interface DetailedCardProps {
  card: Card;
}

export const DetailedCard = ({ card }: DetailedCardProps) => {
  const attackModalRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAttack, setSelectedAttack] = useState<Attack>();

  const {
    cardImage,
    largeCardAlt,
    typeSingular,
    typePlural,
    resistanceSingular,
    resistancePlural,
    weaknessSingular,
    weaknessPlural,
    attackSingular,
    attackPlural,
  } = useTranslation(detailedCardTranslations);

  const handleClick = (attack: Attack) => {
    setSelectedAttack(attack);
    attackModalRef?.current?.onOpen();
  };

  return (
    <article className={styles.container}>
      <section className={styles.imageContainer} aria-labelledby="card-image">
        <h1 className="accessibilityOnly" id="card-image">
          {cardImage}
        </h1>
        <img
          className={styles.image}
          src={card.images.large}
          alt={`${largeCardAlt}: ${card.name}`}
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
            title={
              card.resistances && card.resistances?.length > 1
                ? typePlural
                : typeSingular
            }
            tags={card.types}
          />
          <TagList
            title={
              card.resistances && card.resistances?.length > 1
                ? resistancePlural
                : resistanceSingular
            }
            tags={card.resistances}
            valueColor="Resistance"
          />
          <TagList
            title={
              card.weaknesses && card.weaknesses?.length > 1
                ? weaknessPlural
                : weaknessSingular
            }
            tags={card.weaknesses}
            valueColor="Weakness"
          />

          {card?.attacks && (
            <section
              aria-labelledby="attacks"
              className={styles.attacksContainer}
            >
              <h3 className="tagListTitle" id="attacks">
                {card?.attacks?.length > 1 ? attackPlural : attackSingular}
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
          )}
        </section>
      )}

      <AttackModal attack={selectedAttack} ref={attackModalRef} />
    </article>
  );
};
