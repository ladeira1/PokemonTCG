import { PokemonType, Resistance, Weakness } from 'types/Card';
import { Tag } from '.';
import styles from './Tag.module.scss';

interface TagListProps {
  title?: string;
  tags?: PokemonType[] | Resistance[] | Weakness[];
  valueColor?: 'Resistance' | 'Weakness';
}

export const TagList = ({ title, tags, valueColor }: TagListProps) => {
  if (!tags) return null;

  return (
    <section id="title">
      <h3 className="tagListTitle" id={title}>
        {title}
      </h3>
      <div className={`${styles.tagList} row row-overflow`}>
        {tags?.map(tag => {
          const type = typeof tag === 'string' ? tag : tag?.type;
          const value = typeof tag === 'string' ? undefined : tag?.value;

          return (
            <Tag key={type} type={type} value={value} valueColor={valueColor} />
          );
        })}
      </div>
    </section>
  );
};
