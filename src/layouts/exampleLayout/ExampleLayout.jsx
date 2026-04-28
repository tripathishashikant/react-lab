import { Suspense } from 'react';
import { useMatches } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Tabs from '@/shared/components/tabs/Tabs';
import TabItem from '@/shared/components/tabs/TabItem';
import Code from '@/shared/components/code/Code';
import Loader from '@/shared/components/loader/Loader';

import '@/layouts/exampleLayout/exampleLayout.scss';

const ExampleLayout = ({ exampleComponent, code, notes }) => {
  const matches = useMatches();
  const lastMatch = [...matches].reverse().find(m => m.handle?.example);
  const example = lastMatch?.handle?.example;
  const feature = lastMatch?.handle?.feature;

  const title = example ? `${example.title} | ${feature?.title || 'Example'}` : 'Example';
  const description = example?.description || feature?.description || 'React example';

  return (
    <div className="example-layout">
      <Helmet>
        <title>{`${title} | React Lab`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Tabs>
...

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
