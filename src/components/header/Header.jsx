import { AppBar, Box, Toolbar ,Typography,Drawer,List,ListItem, IconButton,styled} from '@mui/material'
import React, { useState } from 'react'
import Search from './Search'
import CustomButtons from './CustomButtons'

import { Link } from 'react-router-dom'
import {Menu} from '@mui/icons-material';


const StyledHeader = styled(AppBar)`
    background:#2874f0;
    height:55px;

`

const Component = styled(Link)`
    margin-left:12%;
    line-height:0;
    text-decoration:none;
    color:inherit;


`


const Subheading = styled(Typography)`
    font-size:10px;
    font-style:italic;

`
const CustomButtonwrapper = styled(Box)(({theme})=>({
  marginLeft: 'auto',
  display:'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]:{
    display:'none'
  }

}))
    

const Plusimage = styled('img')({
  width:10,
  height:10,
  marginLeft:4


})



const MenuButton = styled(IconButton)(({theme})=>({
   display:'none',
   
   [theme.breakpoints.down('md')]:{

       display:'block'

   }

}))





const Header = () => {

  const [open,setOpen] = useState(false);


 const handleOpen = ()=>{
    setOpen(true)
}

const handleClose = ()=>{
   setOpen(false);

}



const list = () => (
  <Box style={{ width: 200 }} onClick={handleClose}>
      <List>
          <ListItem button>
              <CustomButtons />
          </ListItem>
      </List>
  </Box>
);

    
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


  return (
   <StyledHeader>
    <Toolbar style={{minHeight:55}}>
      <MenuButton color='inherit' onClick={handleOpen}>
        <Menu/>
      </MenuButton>

      <Drawer open={open} onClose={handleClose}>
                    {list()}
                </Drawer>


     <Component to={`/`}>
         <img src={logoURL} alt="logo" style={{width:75}}/>
          <Box style={{display:'flex'}}>
            <Subheading>Explore&nbsp;
              
             <Box component="span" style={{color:"#FFE500"}}>Plus</Box> 
              </Subheading>
              <Plusimage src={subURL} alt="logo" />
          </Box>
      </Component>
     
 
      <Search/>
      <CustomButtonwrapper>
        <CustomButtons/>
      </CustomButtonwrapper>

    </Toolbar>
   </StyledHeader>
  )
}

export default Header
