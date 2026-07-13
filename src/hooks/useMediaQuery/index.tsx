import { useEffect, useState } from 'react';

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    const updateTarget = (event) => setTargetReached(event.matches);
    media.addEventListener(`change`, updateTarget);

    updateTarget(media);

    return () => media.removeEventListener(`change`, updateTarget);
  }, [width]);

  return targetReached;
};

export default useMediaQuery;
