import { useEffect, useState } from 'react';

import { getSculptures } from '../Contentful';

const promise = getSculptures();

export default function useSculptures() {
  const [sculptures, setSculptures] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    promise.then((sculptures) => {
      const sorted = sculptures.sort((a, b) => {
        return a.fields.displayOrder - b.fields.displayOrder;
      });
      setSculptures(sorted);
      setLoading(false);
    });
  }, []);

  return [sculptures, isLoading];
}
