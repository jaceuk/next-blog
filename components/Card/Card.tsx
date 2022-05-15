import styles from './Card.module.scss';
import SlideUp from '@components/SlideUp';

interface IProps {
  children: React.ReactNode;
}

export default function Card({ children }: IProps) {
  return (
    <SlideUp>
      <div className={styles.card}>{children}</div>
    </SlideUp>
  );
}
