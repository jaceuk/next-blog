import styles from './Alert.module.scss';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelIcon from '@mui/icons-material/Cancel';

interface IProps {
  children: React.ReactNode;
  type: string;
}

export default function Alert({ children, type }: IProps) {
  return (
    <div className={`${styles.container} ${styles[type]}`} role={type === 'error' ? 'alert' : undefined}>
      <div className={styles.iconContainer}>
        {type === 'success' && <TaskAltIcon />}
        {type === 'error' && <CancelIcon />}
      </div>
      <div className={styles.textContainer}>{children}</div>
    </div>
  );
}
