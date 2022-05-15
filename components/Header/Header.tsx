import styles from './Header.module.scss';
import AnimatedBackground from '@components/AnimatedBackground';

export default function Headers() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img className={styles.image} src="/images/big-j.svg" alt="" />

        <div className={styles.title}>
          <h1>
            Hi, I&apos;m <span className={styles.bold}>Jason Newington</span>
          </h1>
          <div className={styles.subtitle}>Developer, Designer and Geek</div>
        </div>
      </div>
      <AnimatedBackground />
    </header>
  );
}
