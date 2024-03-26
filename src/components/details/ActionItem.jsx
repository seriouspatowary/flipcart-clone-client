import { Box,Button ,styled} from '@mui/material'
import React, { useState } from 'react'
import {ShoppingCart as Cart,} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';



const LeftContainer = styled(Box)(({theme})=>({


     minWidth:'40%',
     padding:'40px 0 0 80px',
   
  
     [theme.breakpoints.down('lg')]:{
        padding:'20px 40px'  
     }

}))


const Image = styled('img')({
     width:'95%',
     padding:'15px'
     
})

const StyledButton = styled(Button)(({theme})=>({
     width:'100%',
     height:50,
     borderRadius:2,
     textAlign:'center',
     [theme.breakpoints.down('lg')]:{
       width:'46%'
     },
     [theme.breakpoints.down('sm')]:{
          width:'48%'
        }
 
}))
   




const ActionItem = ({product}) => {
         
        const navigate = useNavigate();
        const dispatch = useDispatch()
        const [quantity, setQuantity] = useState(1);

        const { id }  = product;

        const addItemtoCart = ()=> {


             dispatch(addToCart(id,quantity))

             navigate('/cart');

        }


       



  return (
       <LeftContainer>
        <Box style={{ padding:'15px 25px',border:'2px solid #f0f0f0'}}>
           <Image src={product.detailUrl} alt="product" />
        </Box>
         
          <StyledButton variant='contained' onClick={()=>addItemtoCart()} style={{background:'#ff9f00'}}><Cart/>Add to Cart</StyledButton>
      
       </LeftContainer>
  )
}

export default ActionItem
