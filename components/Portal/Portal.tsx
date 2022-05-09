import * as React from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  children: React.ReactNode;
}

const Portal = ({ children }: IProps) => {
  const modalRoot = document.querySelector('body') as HTMLElement;
  const el = React.useRef(document.createElement('div'));

  React.useEffect(() => {
    // Use this in case CRA throws an error about react-hooks/exhaustive-deps
    const current = el.current;

    // We assume `modalRoot` exists with '!'
    if (modalRoot) {
      modalRoot.appendChild(current);
      return () => void modalRoot.removeChild(current);
    }
  }, []);

  return createPortal(children, el.current);
};

export default Portal;
