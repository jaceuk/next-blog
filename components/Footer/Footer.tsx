import styles from './Footer.module.scss';
import AnimatedBackground from '@components/AnimatedBackground';

export default function Footer() {
  return (
    <footer className={`${styles.footer} good`}>
      <div className="inner">© 2022 Jason Newington</div>
      <AnimatedBackground />
    </footer>
  );
}
