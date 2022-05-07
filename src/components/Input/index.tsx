import { ChangeEventHandler } from 'react';
import styles from './Input.module.scss';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({
  type = 'text',
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      data-testid="input"
      className={styles.input}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
