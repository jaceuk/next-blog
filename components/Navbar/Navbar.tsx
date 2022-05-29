import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <Image className={styles.image} src="/images/big-j.svg" alt="" width={45} height={67} />
        <nav className={styles.nav}>
          <Link href={'/'}>
            <a className={styles.button}>Home</a>
          </Link>
          <Link href={'/blog/'}>
            <a className={styles.button}>Blog</a>
          </Link>
          <Link href={'/contact/'}>
            <a className={styles.button}>Contact</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
