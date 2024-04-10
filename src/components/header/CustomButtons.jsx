import { Badge, Box ,Button, Typography,styled} from '@mui/material';
import { useContext, useState, useEffect } from 'react';
import React from 'react';
import {ShoppingCart} from '@mui/icons-material';
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Wrapper = styled(Box)(({ theme }) => ({
  margin: '0 3% 0 auto',
  display: 'flex',
  '& > *': {
      marginRight: '40px !important',
      textDecoration: 'none',
      fontSize: 'inherit',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
          color: '#2874f0',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginTop: 10
      }
  },
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  }
}));

const Container = styled(Link)(({ theme }) => ({
   display:'flex',
   textDecoration:'none',
   color:'inherit',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}));

const LoginButton = styled(Button)`
     color:blue;
     background:#fff;
     text-transform:none;
     padding:10px 30px;
     border-radius:2px;
     box-shadow:none;
     font-weight:600;
     height:32px;
`;

const CustomButtons = () => {
     const [open, setOpen] = useState(false);
     const [loggedInKey, setLoggedInKey] = useState(Date.now()); // Key to force re-render
     const { setUser, getUserData } = useContext(DataContext);
     const { cartItems } = useSelector(state => state.cart);
     
     useEffect(() => {
         getUserData();
     }, []);

     const openDialog = () => {
         setOpen(true);
     };

     const handleLogout = () => {
         localStorage.removeItem('token');
         setLoggedInKey(Date.now()); // Change the key to force re-render
     };

     return (
         <Wrapper key={loggedInKey}> {/* Add key to Wrapper component */}
             {!localStorage.getItem('token') ? (
                 <LoginButton variant="contained" onClick={openDialog}>
                     Login
                 </LoginButton>
             ) : (
                 <LoginButton variant="contained" onClick={handleLogout}>
                     Logout
                 </LoginButton>
             )}
             <Container to="/cart">
                 <Badge badgeContent={cartItems?.length} color="secondary">
                     <ShoppingCart/>
                 </Badge>
                 <Typography style={{marginLeft:10}}>
                     Cart
                 </Typography>
             </Container>
             <Typography style={{marginTop:3, width:135}}>Become a Seller</Typography>
             <Typography style={{marginTop:3,}}>More</Typography>
             <LoginDialog open={open} setOpen={setOpen}/>
         </Wrapper>
     );
};

export default CustomButtons;
