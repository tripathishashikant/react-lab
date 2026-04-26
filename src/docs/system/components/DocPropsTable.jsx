import Table from '@/shared/components/table/Table';

export default function DocPropsTable({ props }) {
  const columns = [
    { key: 'name', title: 'Prop' },
    { key: 'type', title: 'Type' },
    { key: 'defaultValue', title: 'Default' },
    { key: 'description', title: 'Description' },
  ];

  return (
    <div className="c-doc-props">
      <h4 className="c-doc-props__title">Props</h4>
      <Table columns={columns} data={props} />
    </div>
  );
}
