import axios from "axios"
import * as actionTypes from "../constants/productConstant";

const URL = process.env.REACT_APP_APP_URL;


export const getProducts = ()=> async(dispatch)=>{
     try {
       const {data} = await axios.get(`${URL}/products`)
       dispatch({type:actionTypes.GET_PRODUCT_SUCCESS,payload:data})
     } catch (error) {
        dispatch({type:actionTypes.GET_PRODUCT_FAIL, payload:error.message})
     }

}

export const getProductDetail = (id)=> async(dispatch)=>{
  try {

    dispatch({type:actionTypes.GET_PRODUCT_DETAIL_REQUEST})
    const {data} = await axios.get(`${URL}/product/${id}`)
   
    dispatch({type:actionTypes.GET_PRODUCT_DETAIL_SUCCESS,payload:data})
  } catch (error) {
     dispatch({type:actionTypes.GET_PRODUCT_DETAIL_FAIL, payload:error.message})
  }

}