import styles from './Skills.module.scss';
import { Code, Brush, RocketLaunch } from '@mui/icons-material';
import CardTitle from '@components/CardTitle';
import skills from '@data/skills';
import developer from '@data/developer';
import designer from '@data/designer';
import geek from '@data/geek';

export default function Skills() {
  return (
    <div className={styles.inner}>
      <div className="card">
        <CardTitle text={developer.title} icon={<Code />} textSize="large" />
        <div className="row flex-start">
          <div className="stack">
            {developer.text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="tags">
            {skills.sort().map((skill, index) => (
              <div className="tag" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.narrowContainer}>
        <div className="row">
          <div className="card">
            <CardTitle text={designer.title} icon={<Brush />} textSize="small" />
            <div className="row">
              {designer.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="card">
            <CardTitle text={geek.title} icon={<RocketLaunch />} textSize="small" />
            <div className="row">
              {geek.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
