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

const tableColumns = [
  { key: 'name', title: 'Name' },
  { key: 'type', title: 'Type' },
];

const tableData = [
  { name: 'useState', type: 'Hook' },
  { name: 'useEffect', type: 'Hook' },
];

export function getStyleguideSections({ isModalOpen, setIsModalOpen }) {
  return [
    {
      id: 'buttons',
      title: 'Buttons',
      renderDemo: () => (
        <>
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </>
      ),
    },
    {
      id: 'inputs',
      title: 'Inputs',
      renderDemo: () => (
        <>
          <Input id="name-input" label="Name" placeholder="Enter name" />
          <Input id="error-input" label="Error" error="Required field" />
        </>
      ),
    },
    {
      id: 'alerts',
      title: 'Alerts',
      renderDemo: () => (
        <>
          <Alert>Info message</Alert>
          <Alert variant="success">Success message</Alert>
          <Alert variant="error">Error message</Alert>
        </>
      ),
    },
    {
      id: 'tabs',
      title: 'Tabs',
      renderDemo: () => (
        <Tabs>
          <TabItem title="Tab 1">
            <p>Tab 1 content</p>
          </TabItem>
          <TabItem title="Tab 2">
            <p>Tab 2 content</p>
          </TabItem>
        </Tabs>
      ),
    },
    {
      id: 'cards',
      title: 'Cards',
      renderDemo: () => (
        <Card title="Card Title">
          <p>Card content</p>
        </Card>
      ),
    },
    {
      id: 'table',
      title: 'Table',
      renderDemo: () => <Table columns={tableColumns} data={tableData} />,
    },
    {
      id: 'loader',
      title: 'Loader',
      renderDemo: () => (
        <>
          <Loader />
          <Loader size="sm" />
          <Loader size="lg" />
        </>
      ),
    },
    {
      id: 'logo',
      title: 'Logo',
      renderDemo: () => <Logo />,
    },
    {
      id: 'modal',
      title: 'Modal',
      renderDemo: () => (
        <>
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          <Modal
            title="Modal Title"
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <p>Modal content</p>
          </Modal>
        </>
      ),
    },
  ];
}
