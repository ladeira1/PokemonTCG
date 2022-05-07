import { useTranslation } from 'hooks/useTranslation';
import { pokemonTypeTransalation } from 'translations/pokemonType';
import { PokemonType } from 'types/Card';
import styles from './Tag.module.scss';

interface TagProps {
  type: PokemonType;
  value?: string;
  valueColor?: 'Resistance' | 'Weakness';
}

export const Tag = ({ type, value, valueColor }: TagProps) => {
  const translation = useTranslation(pokemonTypeTransalation);

  return (
    <div className={styles.container}>
      <div
        data-testid="tag"
        className={`${styles.tag} ${styles[`color-${type}`]}`}
      >
        {value && (
          <span className={valueColor && styles[`value-${valueColor}`]}>
            {value}
          </span>
        )}
        <p>{translation[type]}</p>
      </div>
    </div>
  );
};
