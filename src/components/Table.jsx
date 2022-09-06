import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteExpense } from '../redux/actions/actions';

export default function DataGridDemo() {
  const {wallet: {expenses}} = useSelector((state) => state);
  const dispatch = useDispatch();

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
  
      width: 160,
    },
    {
      field: 'Exchange Used',
      headerName: 'Exchange Used',
      width: 160,
    },
    {
      field: 'Converted Value',
      headerName: 'Converted Value',
      width: 160,
    },
    {
      field: 'Converted Currency',
      headerName: 'Converted Currency',
      width: 160,
    },
    {
      field: 'Actions',
      headerName: 'Actions',
      width: 160,
      renderCell: (id) => {
        return (
          <Box>
            <DeleteIcon onClick={() => handleDelete(id)} sx={{marginRight:1, color: 'red', cursor:'pointer'}} />
            <EditIcon sx={{color:'orange', cursor:'pointer'}} />
          </Box>
        )
      }
    },
  ];
  const handleDelete = ({id}) => {
    console.log(id);
    dispatch(deleteExpense(id));
  }
  return (
    <Box sx={{ height: 400, width: '100%',marginTop:4, paddingLeft:2.5}}>
      <DataGrid
        loading={false}
        disableColumnMenu={true}
        sx={{fontSize:'1rem'}}
        rows={expenses}
        columns={columns}
        isRowSelectable={()=> false}
      />
    </Box>
  );
}

