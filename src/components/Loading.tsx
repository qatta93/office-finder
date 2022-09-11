import React, { lazy, Suspense } from 'react'

export default function Spinner() {
  // animation effect while waiting for rendering
  const LazyComponent = React.lazy(() => import('./LazyComponent'))



  return (
        <Suspense fallback={<p>dziala!!!</p>}>
          <div>

          <LazyComponent/>
          </div>

        </Suspense>
  );
}