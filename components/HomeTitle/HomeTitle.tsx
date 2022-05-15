import styles from './HomeTitle.module.scss';

export default function HomeTitle() {
  return (
    <>
      <img className={styles.image} src="/images/big-j.svg" alt="" />

      <div className={styles.title}>
        <h1>
          <span className="light">Hi, I&apos;m</span> Jason Newington
        </h1>
        <div className={styles.subtitle}>Developer, Designer and Geek</div>
      </div>
    </>
  );
}
