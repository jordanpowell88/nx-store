import { ButtonHTMLAttributes } from "react";
import styles from './button.module.scss';
export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, onClick, className }) => {
    return (
        <button className={`${styles['button']} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};