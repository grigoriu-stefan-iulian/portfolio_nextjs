import React, { lazy, Suspense } from 'react';

const LazyTechnologies = lazy(() => import('./Technologies'));

const Technologies = props => (
  <Suspense fallback={null}>
    <LazyTechnologies {...props} />
  </Suspense>
);

export default Technologies;
