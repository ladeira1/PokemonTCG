/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useState,
} from 'react';
import { Attack } from 'types/Card';
import { MdClose } from 'react-icons/md';
import { GiPointySword, GiRollingEnergy } from 'react-icons/gi';
import { useTranslation } from 'hooks/useTranslation';
import { attackModalTranslations } from 'translations/attackModal';
import styles from './AttackModal.module.scss';

export interface AttackModalHandler {
  onOpen: () => void;
  onClose: () => void;
}
interface AttackModalProps {
  attack?: Attack;
}

const AttackModalBase: ForwardRefRenderFunction<
  AttackModalHandler,
  AttackModalProps
> = ({ attack }: AttackModalProps, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const { cost, damage, description } = useTranslation(attackModalTranslations);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  useImperativeHandle(ref, () => ({
    onOpen,
    onClose,
  }));

  if (!attack) return null;

  return (
    <div
      role="none"
      className={`${styles.container} ${isOpen && styles.containerOpen}`}
      onClick={onClose}
      onKeyDown={onClose}
    >
      <section
        role="dialog"
        onClick={event => event.stopPropagation()}
        onKeyDown={event => event.stopPropagation()}
        aria-labelledby={attack.name}
        className={styles.content}
      >
        <header className={`row ${styles.header}`}>
          <h2 id={attack.name}>{attack.name}</h2>
          <button
            type="button"
            onClick={onClose}
            data-testid="attack-modal-close-button"
          >
            <MdClose />
          </button>
        </header>

        {attack.convertedEnergyCost && (
          <section>
            <h3>{cost}</h3>
            <ul className={`row ${styles.attribute}`}>
              {attack.cost.map((energy, index) => (
                <li key={index} className={`${styles[`color-${energy}`]}`}>
                  <GiRollingEnergy />
                </li>
              ))}

              <p>{attack.convertedEnergyCost}</p>
            </ul>
          </section>
        )}

        {attack?.damage && (
          <section>
            <h3>{damage}</h3>
            <div className={`row ${styles.attribute}`}>
              <GiPointySword />

              <p>{attack.damage}</p>
            </div>
          </section>
        )}

        {attack?.text && (
          <section>
            <h3>{description}</h3>
            <p className={styles.description}>{attack.text}</p>
          </section>
        )}
      </section>
    </div>
  );
};

export const AttackModal = forwardRef(AttackModalBase);
