import { useEffect, useState } from 'react';

import { getSculptures } from '../Contentful';

const promise = getSculptures();

export default function useSculptures() {
  const [sculptures, setSculptures] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((sculptures) => {
      setSculptures(sculptures);
      setLoading(false);
    });
  }, []);

  return [sculptures, isLoading];
}
