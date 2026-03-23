import { useState } from 'react';
import '@/features/styleguide/pages/styleguide.scss'

import Button from "@/shared/components/button/Button";
import Card from "@/shared/components/card/Card";
import Input from "@/shared/components/input/Input";
import Alert from "@/shared/components/alert/Alert";
import Table from "@/shared/components/table/Table";
import Loader from "@/shared/components/loader/Loader";
import Logo from '@/shared/components/logo/Logo';
import Modal from '@/shared/components/modal/Modal';
import Tabs from '@/shared/components/tabs/Tabs';
import TabItem from '@/shared/components/tabs/TabItem';

export default function StyleguidePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const tableColumns = [
    { key: "name", title: "Name" },
    { key: "type", title: "Type" },
  ];

  const tableData = [
    { name: "useState", type: "Hook" },
    { name: "useEffect", type: "Hook" },
  ];

  return (
    <div className="p-styleguide">
      <h1 className="p-styleguide__title">Styleguide</h1>

      <div className="p-styleguide__grid">

        {/* LEFT COLUMN */}
        <div className="p-styleguide__col">

          {/* BUTTON */}
          <section className="p-styleguide__section">
            <h2>Buttons</h2>
            <div className="p-styleguide__demo">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </section>

          {/* INPUT */}
          <section className="p-styleguide__section">
            <h2>Inputs</h2>
            <div className="p-styleguide__demo">
              <Input id="name-input" label="Name" placeholder="Enter name" />
              <Input id="error-input" label="Error" error="Required field" />
            </div>
          </section>

          {/* ALERT */}
          <section className="p-styleguide__section">
            <h2>Alerts</h2>
            <div className="p-styleguide__demo">
              <Alert>Info message</Alert>
              <Alert type="success">Success message</Alert>
              <Alert type="error">Error message</Alert>
            </div>
          </section>

          {/* TABS */}
          <section className="p-styleguide__section">
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
          </section>

        </div>

        {/* RIGHT COLUMN */}
        <div className="p-styleguide__col">

          {/* CARD */}
          <section className="p-styleguide__section">
            <h2>Cards</h2>
            <div className="p-styleguide__demo">
              <Card title="Card Title">
                <p>Card content</p>
              </Card>
            </div>
          </section>

          {/* TABLE */}
          <section className="p-styleguide__section">
            <h2>Table</h2>
            <Table columns={tableColumns} data={tableData} />
          </section>

          {/* LOADER */}
          <section className="p-styleguide__section">
            <h2>Loader</h2>
            <div className="p-styleguide__demo">
              <Loader />
              <Loader size="sm" />
              <Loader size="lg" />
            </div>
          </section>

          {/* LOGO */}
          <section className="p-styleguide__section">
            <h2>Logo</h2>
            <div className="p-styleguide__demo">
              <Logo />
            </div>
          </section>

          {/* MODAL */}
          <section className="p-styleguide__section">
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
          </section>

        </div>
      </div>
    </div>
  );
}
