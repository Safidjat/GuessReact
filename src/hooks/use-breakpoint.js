import { useState, useEffect } from 'react';

const getBreakpoint = (width) => {
  if (width < 770) return 'sm'; // 2 колонки
  if (width < 1020) return 'md'; // 3 колонки
  return 'lg'; // 4 колонки
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(() => getBreakpoint(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setBreakpoint(getBreakpoint(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};