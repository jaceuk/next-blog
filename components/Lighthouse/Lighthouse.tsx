import styles from './Lighthouse.module.scss';

interface IProps {
  scores: string[];
}

const scoreAreas = ['Performance', 'Accessibility', 'Best Practices', 'SEO'];

function Lighthouse({ scores }: IProps) {
  return (
    <div className={styles.container}>
      {scores.map((score, index) => (
        <div className="stack justify-center" key={index}>
          <div
            className={`${styles.circle} ${parseInt(score) < 90 ? 'average' : 'good'}`}
            style={{
              backgroundImage: `conic-gradient(var(--color-${
                parseInt(score) < 90 ? 'lighthouseAverage' : 'lighthouseGood'
              }) ${score}%, transparent 10%)`,
            }}
          >
            <div className={styles.number}>{score}</div>
          </div>
          <div className={styles.type}>{scoreAreas[index]}</div>
        </div>
      ))}
    </div>
  );
}

export default Lighthouse;
