import styles from './Modal.module.scss';
import { CloseRounded } from '@mui/icons-material';
import FocusTrap from 'focus-trap-react';
import Portal from '@components/Portal';

interface IProps {
  handleCloseClick: () => void;
  image: string;
}

function Modal({ handleCloseClick, image }: IProps) {
  return (
    <>
      <Portal>
        <div className={styles.overlay}>
          <FocusTrap>
            <div className={styles.imageContainer}>
              <button className={styles.close} onClick={handleCloseClick}>
                <div className={styles.icon}>
                  <CloseRounded />
                </div>
              </button>
              <img className={styles.image} src={`/images/${image}`} alt="" />
            </div>
          </FocusTrap>
        </div>
      </Portal>
    </>
  );
}

export default Modal;
