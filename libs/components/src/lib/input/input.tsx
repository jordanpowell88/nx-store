import { FC, InputHTMLAttributes } from 'react';
import styles from './input.module.scss';

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ className, value, onChange, ...props }) => {
    return (
        <input {...props} className={`${styles['input']} ${className}`} value={value} onChange={onChange} />
    );
}