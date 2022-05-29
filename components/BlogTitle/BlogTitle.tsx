import styles from './BlogTitle.module.scss';

export default function BlogTitle() {
  return (
    <>
      <div className={styles.title}>
        <h1>Every time I learn something new</h1>
        <div className={styles.subtitle}>it pushes some old stuff out</div>
      </div>
    </>
  );
}
