import dogsToAdopt from '@data/dogsToAdopt';
import ESOBuilder from '@data/ESOBuilder';
import EVOHomeServices from '@data/EVOHomeServices';
import VIPDine from '@data/VIPDine';
import wakefieldSecurity from '@data/wakefieldSecurity';
import projects from '@data/projects';
import styles from './Projects.module.scss';
import Project from '@components/Project';

function Projects() {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className="stack">
          <h2>{projects.title}</h2>
          {projects.text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <Project data={dogsToAdopt} />

        <Project data={VIPDine} />

        <Project data={ESOBuilder} />

        <Project data={EVOHomeServices} />

        <Project data={wakefieldSecurity} />
      </div>
    </div>
  );
}

export default Projects;
