import styles from './HomeTitle.module.scss';
import Image from 'next/image';

export default function HomeTitle() {
  return (
    <>
      <Image className={styles.image} src="/images/big-j.svg" alt="" width={180} height={265} />

      <div className={styles.title}>
        <h1>
          <span className="light">Hi, I&apos;m</span> Jason Newington
        </h1>
        <div className={styles.subtitle}>Developer, Designer and Geek</div>
      </div>
    </>
  );
}
