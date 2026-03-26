import Tabs from '@/shared/components/tabs/Tabs';
import TabItem from '@/shared/components/tabs/TabItem';
import Code from '@/shared/components/code/Code';

import '@/layouts/exampleLayout/exampleLayout.scss';

const ExampleLayout = ({ exampleComponent, code, notes }) => {
  return (
    <div className="example-layout">
      <Tabs>
        <TabItem title="Example">
          <div className="example-layout__component">
            {exampleComponent}
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
