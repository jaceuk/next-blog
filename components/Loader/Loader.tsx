import PulseLoader from 'react-spinners/PulseLoader';
import styles from './Loader.module.scss';

interface IProps {
  children: React.ReactNode;
}

export default function Loader({ children }: IProps) {
  return (
    <div className={styles.container}>
      <PulseLoader color="white" />
      {children}
    </div>
  );
}
