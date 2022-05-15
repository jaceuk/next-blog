import * as React from 'react';

function isInViewport(ref: React.MutableRefObject<HTMLDivElement>) {
  const [isInViewPort, setIsInViewport] = React.useState(true);

  React.useEffect(() => {
    function handleScroll() {
      if (ref.current) {
        const { top } = ref.current.getBoundingClientRect();
        return setIsInViewport(window.innerHeight - top > 100);
      }
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
    window.addEventListener('click', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
      window.removeEventListener('click', handleScroll);
    };
  }, [ref, isInViewPort]);

  return isInViewPort;
}

export default isInViewport;
