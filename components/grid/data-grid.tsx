'use client';

interface DataGridProps {
  data: Record<string, any>[];
  onRowClick: (row: Record<string, any>) => void;
}

const DataGrid = ({ data, onRowClick }: DataGridProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          {/* ... more columns here */}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id} onClick={() => onRowClick(row)}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataGrid;
