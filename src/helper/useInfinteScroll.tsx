import { useEffect } from "react";

interface paramType {
  root?: null | Element,
  target: null | Element,
  onIntersect: any,
  threshold?: number,
  rootMargin?: string,
};

const useInfinteScroll = ({
  root = null,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = "0px",
}: paramType) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });
    if (!target) {
      return;
    }
    observer.observe(target as Element);
    return () => {
      observer.unobserve(target);
    };
  }, [target, root, rootMargin, onIntersect, threshold]);
};

export default useInfinteScroll;
