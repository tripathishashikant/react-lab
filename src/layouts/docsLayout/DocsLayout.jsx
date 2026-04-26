import { Outlet } from 'react-router-dom';

import '@/layouts/docsLayout/docsLayout.scss';

function DocsLayout() {
  return (
    <div className="docs-layout">
      <div className="docs-layout__content">
        <Outlet />
      </div>
    </div>
  );
}

export default DocsLayout
