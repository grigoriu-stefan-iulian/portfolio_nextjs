import React, { lazy, Suspense } from 'react';

const LazyAvatar = lazy(() => import('./Avatar'));

const Avatar = props => (
  <Suspense fallback={null}>
    <LazyAvatar {...props} />
  </Suspense>
);

export default Avatar;
