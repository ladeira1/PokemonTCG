import { PokemonType } from 'types/Card';
import { Tag } from '.';
import styles from './Tag.module.scss';

interface TagListProps {
  tags?: PokemonType[];
}

export const TagList = ({ tags }: TagListProps) => {
  return (
    <div className={`${styles.tagList} row row-overflow`}>
      {tags?.map(tag => (
        <Tag key={tag} type={tag} />
      ))}
    </div>
  );
};
