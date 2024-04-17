// useMediaQuery.ts

import { useState, useEffect, useCallback } from 'react';
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(() => window.matchMedia(query).matches);

  const updateMatches = useCallback((e: MediaQueryListEvent) => {
    setMatches(e.matches);
  }, []);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    const listener = (e: MediaQueryListEvent) => updateMatches(e);
    mediaQueryList.addListener(listener);

    return () => {
      mediaQueryList.removeListener(listener);
    };
  }, [query, updateMatches]);

  return matches;
};

export default useMediaQuery;
