import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  
  {
    field: 'Description',
    headerName: 'Description',
    width: 150,
  },
  {
    field: 'Currency',
    headerName: 'Currency',
    width: 110,
  },
  {
    field: 'Budget',
    headerName: 'Budget',
    width: 150,
  },
  {
    field: 'Tag',
    headerName: 'Tag',
    description: 'This column has a value getter and is not sortable.',
    width: 160,
  },
];


export default function DataGridDemo() {
  const {wallet} = useSelector((state) => state);
  console.log(wallet.expenses);
  return (
    <Box sx={{ height: 400, width: '100%',marginTop:4}}>
      <DataGrid
        loading={false}
        sx={{fontSize:'1rem'}}
        rows={wallet.expenses}
        columns={columns}
        pageSize={5}
        isRowSelectable={()=> false}
      />
    </Box>
  );
}

