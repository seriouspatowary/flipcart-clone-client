import { Box, Typography, styled } from '@mui/material'
import React, {  useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Component = styled(Menu)`
  margin-top:6px;
  `

  const Logout = styled(Typography)`
  font-size:14px;
  margin-left:20px;

`

const Profile = ({user,setUser}) => {
   const [open,setOpen] = useState(false);

   const handleClick = (event)=>{
      setOpen(event.currentTarget);

   }
   const handleClose = ()=>{
    setOpen(false);

 }

 const logoutUser= ()=>{
   localStorage.removeItem('token')
   setUser(null)
 }
    
  return (
    <>
     <Box onClick={handleClick} >
        <Typography style={{marginTop:2 , cursor:'pointer'}}>{user}</Typography> </Box>

        <Component
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
     
      >
       
        <MenuItem onClick={()=>{logoutUser();handleClose()}} >
        <PowerSettingsNewIcon color='primary' fontSize='small'/>
       <Logout> Logout</Logout>
        </MenuItem>
      </Component>
    
    </>
  )
}

export default Profile
