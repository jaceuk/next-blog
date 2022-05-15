import Link from 'next/link';
import styles from './Navbar.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <img className={styles.image} src="/images/big-j.svg" alt="" />
        <nav className={styles.nav}>
          <Link href={'/'}>
            <a className={styles.button}>Home</a>
          </Link>
          <Link href={'/contact/'}>
            <a className={styles.button}>Contact</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
