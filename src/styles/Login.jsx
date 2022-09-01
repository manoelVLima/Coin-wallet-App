import { Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(({theme}) => ({
  padding: 20,
  height: '93vh',
  width: 280,
  background: 'white',
  margin: '20px auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent:'center',
  gap: 16,
  [theme.breakpoints.down('sm')]: {
    gap: 20,
    height: '95vh',
    margin: '20px auto'
  }
}))
export const StyledImg = styled('img')({

})