import { useEffect } from "react";
import { useRouter } from 'next/router'
// import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default ScrollToTop;