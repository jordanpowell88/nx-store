import styles from './card.module.scss';

export const Card: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className, ...props }) => {
    return (
        <div {...props} className={`${styles['card']} ${className}`}>
            {children}
        </div>
    );
};