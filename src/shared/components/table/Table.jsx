import '@/shared/components/table/table.scss'

export default function Table({ columns = [], data = [] }) {
  return (
    <div className="c-table">
      <table className="c-table__element">
        <thead className="c-table__head">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="c-table__th">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="c-table__body">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="u-text-center">
                No data available
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr
                key={i}
                className="c-table__row"
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((col) => (
                  <td key={col.key} className="c-table__td">
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}