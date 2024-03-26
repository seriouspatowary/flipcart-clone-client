import React from 'react'
import { Typography,Box, styled, Table, TableBody, TableCell, TableRow } from '@mui/material';
import {LocalOffer as Local} from '@mui/icons-material';




const SmallText = styled(Box)`
   font-size:14px;
   vertical-align:baseline;
  
   & >p{
    font-size:14px;
    margin-top:10px;
    margin-right:'20px',
   }

`

const StyledIcon = styled(Local)`
     margin-right:10px;
     color:#00CC00;
     font-size:15px;

`
const CommonText = styled(TableRow )`
   
     font-size:15px;
     vertical-align:baseline;

     & > td{
      font-size:14px;
      margin-top:10px;
      border:none;
     }

`





const ProductDetail = ({product}) => {



   
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() +(5*24*60*60*1000))

  return (
    <>
          <Typography>{product.title.longTitle}</Typography>
                  <Typography style={{marginTop:5, color:'#878787'}}>8 Ratings and 1 Reviews
                    <Box component='span'><img src={fassured} style={{width:77,marginLeft:20}} alt="fassured" /></Box>
                  
                  </Typography>

                  <Typography>
                     <Box component='span' style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                     <Box component='span' style={{color:'#878787'}} ><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                     <Box component='span' style={{color:'#388E3C'}}>{product.price.discount}</Box>
                  </Typography>

                  <Typography>Available Offers</Typography>
                  <SmallText>
                    <Typography><StyledIcon/>Special PriceGet extra 59% off (price inclusive of cashback/coupon)T&C</Typography>
                    <Typography><StyledIcon/>10% off on BOBCARD EMI Transactions, up to ₹2,000 on orders of ₹10,000 and aboveT&C</Typography>
                
                    <Typography><StyledIcon/>10% off on Citi-branded Credit and Debit Card Txns, up to ₹1,500 on orders of ₹10,000 and aboveT&C</Typography>
                    <Typography><StyledIcon/>10% off on BOBCARD EMI Transactions, up to ₹2,000 on orders of ₹10,000 and aboveT&C</Typography>
                  </SmallText>

                  <Table>
                    <TableBody>

                        <CommonText >
                            <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                            <TableCell style={{fontWeight:600}}>Delivery By {date.toDateString()} | ₹40</TableCell>
                        </CommonText >

                        <CommonText >
                            <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                            <TableCell>No Warranty</TableCell>
                        </CommonText >
                        <CommonText >
                            <TableCell style={{color:'#878787'}}>Seller</TableCell>
                            <TableCell >
                                <Box component='span' style={{color:'#2874f0'}}>SuperComNet</Box>
                                <Typography>GST invoice available</Typography>
                                <Typography>View more sellers starting from ₹{product.price.cost} </Typography>
                            </TableCell>
                        </CommonText >


                        <CommonText >
                            <TableCell colSpan={2}>
                                <img src={adURL} style={{width:390}} alt="flipcart" />
                            </TableCell>
                            
                        </CommonText >

                        <CommonText >
                            <TableCell style={{color:'#878787'}}>Description</TableCell>
                            <TableCell>{product.description}</TableCell>
                        </CommonText >
                    </TableBody>
                  </Table>
    </>
  )
}

export default ProductDetail
