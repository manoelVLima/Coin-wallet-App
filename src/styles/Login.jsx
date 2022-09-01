import { Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(({theme}) => ({
  padding: 20,
  height: '87vh',
  width: 280,
  background: 'white',
  margin: '20px auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent:'center',
  gap: 20,
  [theme.breakpoints.down('sm')]: {
    gap: '32px'
  }
}))
export const StyledImg = styled('img')({

})