import styles from './card.module.scss';

export const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    return (
        <div className={`${styles['card']} ${className}`}>
            {children}
        </div>
    );
};