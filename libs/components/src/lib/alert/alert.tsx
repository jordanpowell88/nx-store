import { Button } from '../button/button';
import styles from './alert.module.scss';

export const Alert: React.FC<{ children: React.ReactNode, type: 'success' | 'error', className?: string, onClose?: () => void }> = ({ children, type, className, onClose }) => {
    
    const alertClass = type === 'success' ? styles.success : styles.error;

    return (
        <div className={`${styles.alert} ${alertClass} ${className}`}>
            {children}
            <Button className={styles.close} onClick={onClose}>X</Button>
        </div>
    );
}