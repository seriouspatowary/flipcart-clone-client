import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { InputBase,Box, List, ListItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';


const Searchcontainer = styled(Box)`
   background:#fff;
   width:38%;
   border-radius:2px;
   margin-left:10px;
   display:flex;

`

const InputSearchbase = styled(InputBase)`
   padding-left:20px;
   width:100%;
   font-size:unset;

`
const SearchIconWrapper = styled(Box)`
   display:flex;
   color:blue;
   padding:5px;

`
const ListWrapper = styled(List)`
   position:absolute;
   background:#FFFFFF;
   color:#000;
   margin-top:36px;

`

const Search = () => {
   const [text,setText] = useState('');

  const {products} = useSelector(state => state.getProductFromDatabase);

  const dispatch = useDispatch();

  useEffect(()=>{
     dispatch(getProducts())

  },[dispatch])

  const getText = (text)=>{
            setText(text);
  }


  return (
    <Searchcontainer>
       <InputSearchbase
       placeholder='Search for products,brands and more'

       onChange={(e)=>getText(e.target.value)}
       value={text}
       
       />
       <SearchIconWrapper>
          <SearchIcon/>
       </SearchIconWrapper>

       {
         text && 
         <ListWrapper>
            {
               products.filter(item => item.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(

                  <ListItem>
                     <Link to={`/product/${product.id}`
                  }
                  
                  onClick={()=>setText('')}
                  style={{textDecoration:'none',color:'inherit'}}
                  
                  >
                     {product.title.longTitle}

                     </Link>
                     
                  </ListItem>
               ))
            }
         </ListWrapper>
       }
    </Searchcontainer>
  )
}

export default Search
