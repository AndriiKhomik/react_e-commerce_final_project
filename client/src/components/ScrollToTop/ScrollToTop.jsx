import { useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return children;
};

export default ScrollToTop;
