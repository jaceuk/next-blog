import styles from './AnimatedBackground.module.scss';

export default function AnimatedBackground() {
  return (
    <div className={styles.animation}>
      <div className={styles.background}>
        <div className={styles.circles}>
          {[...Array(10)].map((element, index) => (
            <div className={styles.circle} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
