import styles from './Skills.module.scss';
import { Code, Brush, RocketLaunch } from '@mui/icons-material';
import CardTitle from '@components/CardTitleSC';
import skills from '@data/skills';
import developer from '@data/developer';
import designer from '@data/designer';
import geek from '@data/geek';
import Card from '@components/Card';

export default function Skills() {
  return (
    <div className={styles.inner}>
      <Card>
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
      </Card>

      <div className={styles.narrowContainer}>
        <div className="row">
          <Card>
            <CardTitle text={designer.title} icon={<Brush />} textSize="small" />
            <div className="row">
              {designer.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Card>

          <Card>
            <CardTitle text={geek.title} icon={<RocketLaunch />} textSize="small" />
            <div className="row">
              {geek.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
