import styles from './Button.module.scss';

interface ButtonProps {
  children: string;
  onClick: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      data-testid="button"
      className={styles.button}
      type="button"
      onClick={onClick}
    >
      <p>{children}</p>
    </button>
  );
};
