import Table from '@/shared/components/table/Table';

export const tableRegistry = {
  id: 'table',
  title: 'Table',
  description: 'Tables are used to display structured data in rows and columns.',
  usage: 'Use tables to organize and present large sets of data. Supports custom columns and row click handlers.',
  props: [
    {
      name: 'columns',
      type: 'Array<{ key: string, title: string }>',
      defaultValue: '[]',
      description: 'Configuration for table columns.'
    },
    {
      name: 'data',
      type: 'Array<Object>',
      defaultValue: '[]',
      description: 'The data to be displayed in the table.'
    },
    {
      name: 'onRowClick',
      type: 'function',
      defaultValue: 'undefined',
      description: 'Optional callback triggered when a row is clicked.'
    }
  ],
  examples: [
    {
      name: 'Basic Table',
      description: 'A simple table with static data.',
      render: () => {
        const columns = [
          { key: 'id', title: 'ID' },
          { key: 'name', title: 'Name' },
          { key: 'role', title: 'Role' }
        ];
        const data = [
          { id: 1, name: 'John Doe', role: 'Admin' },
          { id: 2, name: 'Jane Smith', role: 'Editor' },
          { id: 3, name: 'Bob Johnson', role: 'User' }
        ];
        return <Table columns={columns} data={data} />;
      },
      code: `const columns = [
  { key: 'id', title: 'ID' },
  { key: 'name', title: 'Name' },
  { key: 'role', title: 'Role' }
];
const data = [
  { id: 1, name: 'John Doe', role: 'Admin' },
  { id: 2, name: 'Jane Smith', role: 'Editor' }
];
<Table columns={columns} data={data} />`
    }
  ]
};
