import styles from './CardTitle.module.scss';

interface IProps {
  text: string;
  icon: React.ReactNode;
  textSize: string;
}

export default function CardTitle({ text, textSize, icon }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>

      {textSize !== 'small' ? <h2>{text}</h2> : <h3>{text}</h3>}
    </div>
  );
}
