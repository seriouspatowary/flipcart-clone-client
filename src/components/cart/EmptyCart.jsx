import { Box, Typography, styled } from '@mui/material'
import React from 'react'





const Wrapper = styled(Box)`
        height:65vh;
        width:80%;
        background:#fff;
        margin:80px 140px;
  
`

const Container = styled(Box)`
        text-align:center;
        padding-top:70px;
  
`

const Upcontainer = styled(Typography)`

          text-align:center;
          padding-top:70px;
          font-weight:600
`



const EmptyCart = () => {

    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    

  return (
     <Wrapper> 
        
          {!localStorage.getItem('token') ?<Upcontainer>Login to see Cart items</Upcontainer> :<></>} 
               <Container>
                   <img src={imgurl} alt="empty.." style={{width:'16%'}}/>
                   <Typography>Your cart is empty</Typography>
                   <Typography>Add items it to now</Typography>
               </Container>
     </Wrapper>
  )
}

export default EmptyCart
