import { PokemonType } from 'types/Card';
import styles from './Tag.module.scss';

interface TagProps {
  type: PokemonType;
}

export const Tag = ({ type }: TagProps) => {
  return (
    <div className={`${styles.tag} ${styles[`color-${type}`]}`}>
      <p>{type}</p>
    </div>
  );
};
