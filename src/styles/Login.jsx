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
    gap: 32,
    height: '76vh',
    margin: '7vh auto'
  }
}))
export const StyledImg = styled('img')({

})