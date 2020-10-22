import React, {   Suspense } from 'react';
import { Status } from 'tea-component';

export default function (Page) {
  return class extends React.Component {
    static displayName = `withSuspense(${Page.displayName || Page.name})`
    render() {
      return (
        <Suspense fallback={<Status icon="loading" />}>
          <Page />
        </Suspense>
      );
    }
  };
}
