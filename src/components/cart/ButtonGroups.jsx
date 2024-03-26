import { Button, ButtonGroup, styled } from '@mui/material'
import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { DataContext } from '../../context/DataProvider';
import { useContext } from 'react';

const Component = styled(ButtonGroup)`
      margin-top:30px;
      display: flex;
      justify-content: space-between;
      width: 140px;
`


const StyledButton = styled(Button)`
   border-radius: 49%!important; 
   background-color: #f0f2f7; 

   border: 1px solid #cccccc;
   padding: 8px 12px; 
   font-size: 16px; 
   font-weight: bold; 
   cursor: pointer;

   &:hover {
    background-color: #e1e4e9; 
   }
`


const QuantityDisplay = styled(Button)`
    border-radius: 2px; 
    background-color: #ffffff; 
    color: #333333; 
    border: 1px solid #cccccc; 
    padding: 8px 12px; 
    font-size: 16px; 
    font-weight: bold;
`




const ButtonGroups = () => {



  
   const {qty,setQty} = useContext(DataContext)

   const handleIncrement = () => {
    setQty(qty + 1);
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };



  return (
    <Component>
        <StyledButton onClick={()=>handleDecrement()}><FaMinus size={12}/></StyledButton>
        <QuantityDisplay disabled>{qty}</QuantityDisplay>
        <StyledButton onClick={()=>handleIncrement()}  > <FaPlus size={12} /></StyledButton>
    </Component>
  )
}

export default ButtonGroups
