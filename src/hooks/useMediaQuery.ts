import { useState, useEffect } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const mqlHandler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", mqlHandler);

    return () => {
      mediaQueryList.removeEventListener("change", mqlHandler);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
