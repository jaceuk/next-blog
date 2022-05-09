import styles from './ContactTitle.module.scss';

export default function ContactTitle() {
  return (
    <>
      <div className={styles.title}>
        <h1>Let’s talk</h1>
        <div className={styles.subtitle}>Please get in touch to talk about, well, anything really</div>
      </div>
    </>
  );
}
