import { useState, useEffect, useRef } from 'react';

export function useScrollReveal(threshold = 1) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const windowHeight = window.innerHeight;
        const offsetTop = elementRef.current.offsetTop;
        const scrollY = window.scrollY;
        const revealThreshold = offsetTop - windowHeight ;

        if (scrollY > revealThreshold && !isRevealed) {
          setIsRevealed(true);
        } else if (scrollY <= revealThreshold && isRevealed) {
          setIsRevealed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isRevealed, threshold]);

  return { isRevealed, elementRef };
}
