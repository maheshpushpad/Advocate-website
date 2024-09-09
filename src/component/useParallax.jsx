import { useEffect, useRef } from 'react';

const useParallax = (offset) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      if (ref.current) {
        ref.current.style.transform = `translateY(${scrollPosition * offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return ref;
};

export default useParallax;
