import styles from './Overlay.module.scss';

interface IProps {
  children: React.ReactNode;
}

export default function Overlay({ children }: IProps) {
  return <div className={styles.overlay}>{children}</div>;
}
