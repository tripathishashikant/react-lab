import { Suspense } from 'react';
import Tabs from '@/shared/components/tabs/Tabs';
import TabItem from '@/shared/components/tabs/TabItem';
import Code from '@/shared/components/code/Code';
import Loader from '@/shared/components/loader/Loader';

import '@/layouts/exampleLayout/exampleLayout.scss';

const ExampleLayout = ({ exampleComponent, code, notes }) => {
  return (
    <div className="example-layout">
      <Tabs>
        <TabItem title="Example">
          <div className="example-layout__component">
            <Suspense fallback={<Loader />}>
              {exampleComponent}
            </Suspense>
          </div>
        </TabItem>
        <TabItem title="Code">
          <Code code={code} />
        </TabItem>
        {notes && (
          <TabItem title="Notes">
            <div className="example-layout__notes">
              {notes}
            </div>
          </TabItem>
        )}
      </Tabs>
    </div>
  );
};

export default ExampleLayout;
