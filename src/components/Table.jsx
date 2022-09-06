import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteExpense } from '../redux/actions/actions';
import { Modal, Typography } from '@mui/material';
import WalletForm from './WalletForm';
import EditExpense from './EditExpense';

export default function DataGridDemo() {
  const {wallet: {expenses}} = useSelector((state) => state);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    
    {
      field: 'Description',
      headerName: 'Description',
      width: 150,
      color:'red'
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
  
      width: 120,
    },
    {
      field: 'Exchange Used',
      headerName: 'Exchange Used',
      width: 160,
    },
    {
      field: 'Converted Value',
      headerName: 'Converted Value',
      width: 190,
    },
    {
      field: 'Converted Currency',
      headerName: 'Converted Currency',
      width: 180,
    },
    {
      field: 'Actions',
      headerName: 'Actions',
      width: 160,
      renderCell: (id) => {
        return (
          <Box>
            <DeleteIcon onClick={() => handleDelete(id)} sx={{marginRight:1, color: 'red', cursor:'pointer'}} />
            <EditIcon onClick={() => setOpen(true)} sx={{color:'orange', cursor:'pointer'}} />
          </Box>
        )
      }
    },
  ];
  const handleDelete = ({id}) => {
    dispatch(deleteExpense(id));
  }
  const renderExpenses = expenses.map((expense) => ({
    ...expense,
    'Exchange Used': Number(expense.exchangeRates[expense.Currency].ask).toFixed(2),
    'Converted Value': `R$${Number(expense.exchangeRates[expense.Currency].ask * expense.Budget).toFixed(2)}` ,
    'Converted Currency': "Real brasileiro",


  }))

  return (
    <Box sx={{ height: 400, width: '100%',marginTop:4, paddingLeft:2.5}}>
      <DataGrid
        loading={false}
        disableColumnMenu={true}
        sx={{fontSize:'1rem'}}
        rows={renderExpenses}
        columns={columns}
        isRowSelectable={()=> false}
      />
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{margin: {
          xs: '20vh auto',
          sm: '40vh auto',
        }, background: 'white', width: '50vw'}}>
          <EditExpense />
        </Box>
      </Modal>
    </Box>
  );
}

