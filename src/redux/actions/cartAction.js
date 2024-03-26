import axios from "axios"
import * as actionTypes  from '../constants/cartConstant'

const URL = process.env.REACT_APP_APP_URL;




export const addToCart = (id,quantity) => async(dispatch)=> {
  
      try {

       const {data} =  await axios.get(`${URL}/product/${id}`)

       dispatch({type:actionTypes.ADD_TO_CART,payload:{...data,quantity}})
        
      } catch (error) {

        dispatch({type:actionTypes.ADD_TO_CART_ERROR, payload:error.message})
        
      }

}

export const removeFromCart = (id)=> (dispatch)=> {

     dispatch({type:actionTypes.REMOVE_FROM_CART, payload:id})
}


export const updateQuantity = (id, quantity) => ({
    type: actionTypes.UPDATE_QUANTITY,
    payload: { id, quantity }
  });

  
 

  export const clearCart = () => {
    return {
      type: actionTypes.CLEAR_CART
    };
  };
  