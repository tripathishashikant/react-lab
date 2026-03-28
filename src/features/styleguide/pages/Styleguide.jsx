import { useState } from 'react';
import '@/features/styleguide/pages/styleguide.scss';

import Button from '@/shared/components/button/Button';
import Card from '@/shared/components/card/Card';
import Input from '@/shared/components/input/Input';
import Alert from '@/shared/components/alert/Alert';
import Table from '@/shared/components/table/Table';
import Loader from '@/shared/components/loader/Loader';
import Logo from '@/shared/components/logo/Logo';
import Modal from '@/shared/components/modal/Modal';
import Tabs from '@/shared/components/tabs/Tabs';
import TabItem from '@/shared/components/tabs/TabItem';
import { useShuffledArray } from '@/shared/hooks/useShuffledArray.js';

export default function StyleguidePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tableColumns = [
    { key: 'name', title: 'Name' },
    { key: 'type', title: 'Type' },
  ];

  const tableData = [
    { name: 'useState', type: 'Hook' },
    { name: 'useEffect', type: 'Hook' },
  ];

  const sections = [
    <section key="buttons" className="p-styleguide__section u-masonry-item">
      <h2>Buttons</h2>
      <div className="p-styleguide__demo">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </section>,
    <section key="inputs" className="p-styleguide__section u-masonry-item">
      <h2>Inputs</h2>
      <div className="p-styleguide__demo">
        <Input id="name-input" label="Name" placeholder="Enter name" />
        <Input id="error-input" label="Error" error="Required field" />
      </div>
    </section>,
    <section key="alerts" className="p-styleguide__section u-masonry-item">
      <h2>Alerts</h2>
      <div className="p-styleguide__demo">
        <Alert>Info message</Alert>
        <Alert type="success">Success message</Alert>
        <Alert type="error">Error message</Alert>
      </div>
    </section>,
    <section key="tabs" className="p-styleguide__section u-masonry-item">
      <h2>Tabs</h2>
      <div className="p-styleguide__demo">
        <Tabs>
          <TabItem title="Tab 1">
            <p>Tab 1 content</p>
          </TabItem>
          <TabItem title="Tab 2">
            <p>Tab 2 content</p>
          </TabItem>
        </Tabs>
      </div>
    </section>,
    <section key="cards" className="p-styleguide__section u-masonry-item">
      <h2>Cards</h2>
      <div className="p-styleguide__demo">
        <Card title="Card Title">
          <p>Card content</p>
        </Card>
      </div>
    </section>,
    <section key="table" className="p-styleguide__section u-masonry-item">
      <h2>Table</h2>
      <Table columns={tableColumns} data={tableData} />
    </section>,
    <section key="loader" className="p-styleguide__section u-masonry-item">
      <h2>Loader</h2>
      <div className="p-styleguide__demo">
        <Loader />
        <Loader size="sm" />
        <Loader size="lg" />
      </div>
    </section>,
    <section key="logo" className="p-styleguide__section u-masonry-item">
      <h2>Logo</h2>
      <div className="p-styleguide__demo">
        <Logo />
      </div>
    </section>,
    <section key="modal" className="p-styleguide__section u-masonry-item">
      <h2>Modal</h2>
      <div className="p-styleguide__demo">
        <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
        <Modal
          title="Modal Title"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <p>Modal content</p>
        </Modal>
      </div>
    </section>,
  ];

  const shuffledSections = useShuffledArray(sections);

  return (
    <div className="p-styleguide">
      <div className="p-styleguide__grid u-masonry-container">
        {shuffledSections}
      </div>
    </div>
  );
}
