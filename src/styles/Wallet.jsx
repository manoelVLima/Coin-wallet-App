import { Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)(({theme}) => ({
  background:'white', 
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent: 'center',
  padding:2.5, 
  margin:'0 auto',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  }
}))