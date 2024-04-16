import { useState } from 'react';
import DataGrid from './grid/data-grid';

const generateData = (count: number) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: i,
      name: `Item ${i}`,
      description: `This is item ${i}`
      // ... more fields here
    });
  }
  return data;
};

const GenericDataView = () => {
  const [selectedRow, setSelectedRow] = useState<Record<string, any> | null>(null);
  const handleRowClick = (row: Record<string, any>) => {
    setSelectedRow(row);
  };

  const data = generateData(10000); // generate 10,000 rows of data

  return (
    <div>
      <DataGrid data={data} onRowClick={handleRowClick} />
      {selectedRow && <div>Selected row: {selectedRow.name}</div>}
    </div>
  );
};

export default GenericDataView;
