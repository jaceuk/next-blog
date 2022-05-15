import styles from './Header.module.scss';
import AnimatedBackground from '@components/AnimatedBackground';

interface IProps {
  title: React.ReactNode;
}

export default function Headers({ title }: IProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>{title}</div>
      <AnimatedBackground />
    </header>
  );
}
