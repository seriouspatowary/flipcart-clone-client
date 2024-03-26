import { useState,useEffect,useContext } from 'react';
import { useSelector,useDispatch  } from 'react-redux'
import { Box, Button, Grid, Typography, styled } from '@mui/material'
import CartItem from './CartItem';
import TotalBalance from './TotalBalance';
import EmptyCart from './EmptyCart';
import { DataContext } from '../../context/DataProvider'
import { clearCart } from '../../redux/actions/cartAction';

const Container = styled(Grid)(({theme})=>({
    
    padding:'30px 135px',

    [theme.breakpoints.down('md')]:{
             
        padding:'15px 0'
    }
  
}))


const Header = styled(Grid)`

   padding:15px 24px;
   background:#fff;
  

`

const ButtonWrapper = styled(Box)`
   padding: 16px 22px;
   background: #fff;
   box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
   border-top: 1px solid #f0f0f0;

`

const StyledButton = styled(Button)`
     display:flex;
     margin-Left:auto;
     background:#fb641b;
     color:#fff;
     width:250px;
     height:51px;
     border-radius:2px;
     &:hover {
      color:#fff; 
      background: #FB641B;
    
    }

`


const LeftComponent = styled(Grid)(({theme})=>({


  paddingRight:15,

  [theme.breakpoints.down('md')]:{
     marginBottom:15

  }


  
}))
const RightComponent = styled(Grid)`
 

`


const Cart = () => {

   

    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const {qty} = useContext(DataContext)

    const dispatch = useDispatch();
    
    const url = process.env.REACT_APP_APP_URL;

    const totalAmount = ()=>{
      let price = 0, discount = 0;

      cartItems.map(item =>{
        price += item.price.mrp;
        discount += (item.price.mrp - item.price.cost);
    })

      setPrice(price);
      setDiscount(discount);

    }

  useEffect(()=>{
      totalAmount();
    },[cartItems])

 
 

    const handleCheckoutValidate = async()=>{
      console.log('OrderItems : ', cartItems)
    
      console.log('Total Price : ', price*qty-discount*qty+4);
     
    
      await handleCheckout({
        orderItem: cartItems,
        totalPrice: price*qty-discount*qty+40,
      });

    }

    const handleCheckout = async(newOrder)=>{
        
      try {
         const response = await fetch(`${url}/order`,{
           method:'POST',
           headers:{
            "Content-Type":"application/json"

           },
           body:JSON.stringify(newOrder)

         })

         const json = await response.json();

         if (json.success) {
            console.log('Order has been placed Succesfully.')
            alert('Order has been placed Succesfully.')
            dispatch(clearCart());
            
          } else {
            alert("Couldn't process your order, Please try again after sometimes.");
            
          }
         
      } catch (error) {
        console.error(error);
        alert(error);
         
      }


    }




  return (
      <>
      {
          (cartItems.length > 0 && localStorage.getItem("token")) ?
            <Container container>

                        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                             <Header>
                              <Typography>My Cart({cartItems.length})</Typography>
                             </Header>
                             {

                                cartItems.map(item =>(
                                      <CartItem item={item} key={item.id}/>
                                ))
                             }
                             <ButtonWrapper>
                                <StyledButton onClick={handleCheckoutValidate}>PLACE ORDER</StyledButton>
                             </ButtonWrapper>
                        </LeftComponent>



                        <RightComponent item lg={3} md={3} sm={12} xs={12}>
                           <TotalBalance cartItems={cartItems}/>
                        </RightComponent>


             </Container>
          :(
          
            <EmptyCart/>
          

)

      }
      
      </>
  )
}

export default Cart
