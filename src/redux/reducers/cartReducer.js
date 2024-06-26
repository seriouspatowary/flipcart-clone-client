import * as actionTypes from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: []}, action) => {


    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            const item = action.payload;

            const existItem = state.cartItems.find(product => product.id === item.id);
            
            if(existItem){
                return {
                    ...state, cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            } else {
                return  { ...state, cartItems: [...state.cartItems, item]}
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state, cartItems: state.cartItems.filter(product => product.id !== action.payload)
            }

        case actionTypes.UPDATE_QUANTITY:
            const { id, quantity } = action.payload;
     
           return {
                ...state, cartItems: state.cartItems.map(item => (item.id === id ? { ...item, quantity } : item))
                
                }
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
              };
          
        default:
            return state;
    }
}