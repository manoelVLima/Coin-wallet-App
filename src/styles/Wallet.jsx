import { Container, styled } from "@mui/material";

export const StyledContainer = styled(Container)(({theme}) => ({
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  justifyContent: 'center',
  padding:2.5, 
  margin:'10px auto',

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  }
}))