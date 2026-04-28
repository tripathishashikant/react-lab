import { Outlet, useMatches } from 'react-router-dom';

import '@/layouts/docsLayout/docsLayout.scss';

function DocsLayout() {
  const matches = useMatches();
  const { handle } = matches[matches.length - 1] || {};
  const { docPage } = handle || {};

  return (
    <div className="docs-layout">
      <div className="docs-layout__header">
        <section className="docs-layout__info">
          <h1 className="docs-layout__title">{docPage?.title}</h1>
          {docPage?.description && (
            <p className="docs-layout__description">{docPage.description}</p>
          )}
        </section>
      </div>
      <div className="docs-layout__content">
        <Outlet />
      </div>
    </div>
  );
}

export default DocsLayout
