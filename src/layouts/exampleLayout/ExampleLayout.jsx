import Tabs from '@/shared/components/tabs/Tabs';
import TabItem from '@/shared/components/tabs/TabItem';

import './exampleLayout.scss';

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
          <pre>
            <code>{code}</code>
          </pre>
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
