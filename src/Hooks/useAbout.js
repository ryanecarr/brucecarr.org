import { useEffect, useState } from 'react';

import { getAbout } from '../Contentful';

const promise = getAbout();

export default function useAbout() {
  const [about, setAbout] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((about) => {
      setAbout(about);
      setLoading(false);
    });
  }, []);

  return [about, isLoading];
}
