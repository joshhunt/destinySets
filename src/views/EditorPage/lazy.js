import React, { Suspense } from 'react';
import Icon from 'app/components/Icon'

const EditorPage = React.lazy(() => import('./'));

function Loading() {
  return <div><Icon name="loading" /> Loading...</div>
}

export default function LazyEditorPage() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <EditorPage />
      </Suspense>
    </div>
  );
}
