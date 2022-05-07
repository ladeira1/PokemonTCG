import { PokemonType } from 'types/Card';
import styles from './Tag.module.scss';

interface TagProps {
  type: PokemonType;
  value?: string;
  valueColor?: 'Resistance' | 'Weakness';
}

export const Tag = ({ type, value, valueColor }: TagProps) => {
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
        <p>{type}</p>
      </div>
    </div>
  );
};
