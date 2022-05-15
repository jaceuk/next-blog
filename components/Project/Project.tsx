import * as React from 'react';
import { KeyboardArrowDown, KeyboardArrowUp, OpenInNew } from '@mui/icons-material';
import styles from './Project.module.scss';
import Lighthouse from '@components/Lighthouse';
import Modal from '@components/Modal';

interface IProjectProps {
  data: {
    title: string;
    image: string;
    intro: string;
    type: string;
    tags: string[];
    text: string[];
    lighthouseScores?: string[];
    features?: {
      title: string;
      text: string[];
    }[];
  };
}

export function Project({ data }: IProjectProps) {
  const projectRef = React.useRef<HTMLDivElement>();

  const [infoVisible, setInfoVisible] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  function handleMoreClick() {
    setInfoVisible(!infoVisible);
    projectRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  function handleImageClick() {
    setShowModal(!showModal);
  }

  return (
    <div ref={projectRef}>
      <div className="card">
        <div className="stack large">
          <div className="row">
            <div
              className={styles.imageContainer}
              onClick={handleImageClick}
              style={{ backgroundImage: `url(images/${data.image})` }}
            >
              <span className={styles.icon}>
                <OpenInNew />
              </span>
              <span className="accessibleText">See screenshot for {data.title}</span>
            </div>

            <div>
              <div className={styles.text}>
                <div className="stack medium">
                  <div>
                    <div className={styles.type}>{data.type}</div>
                    <h2>{data.title}</h2>
                  </div>
                  <p>{data.intro}</p>
                  <div className="box center">
                    <button className="button" onClick={handleMoreClick}>
                      {infoVisible ? (
                        <>
                          See less <span className="accessibleText">about {data.title}</span>
                          <span className={styles.icon}>
                            <KeyboardArrowUp />
                          </span>
                        </>
                      ) : (
                        <>
                          See more <span className="accessibleText">about {data.title}</span>
                          <span className={styles.icon}>
                            <KeyboardArrowDown />
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {infoVisible && (
            <div className={styles.moreInfo}>
              <div className="stack large">
                <div className="card">
                  <h3>Project overview</h3>
                  <div className="row flex-start">
                    <div className="stack">
                      {data.text.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="tags">
                      {data.tags.sort().map((tag, index) => (
                        <div className="tag" key={index}>
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {data.lighthouseScores && <Lighthouse scores={data.lighthouseScores} />}

                {data.features && (
                  <div className="row">
                    {data.features.map((feature, index) => (
                      <div className={styles.feature} key={index}>
                        <h3>{feature.title}</h3>

                        {feature.text && feature.text.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {showModal && <Modal handleCloseClick={handleImageClick} image={data.image} />}
    </div>
  );
}
export default Project;
