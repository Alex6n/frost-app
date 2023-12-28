import { useState, useEffect } from "react";

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const listener = () => setMatches(mediaQuery.matches);

    mediaQuery.addListener(listener);
    listener();

    return () => mediaQuery.removeListener(listener);
  }, [query]);

  return matches;
}

export default useMediaQuery;
