import React,  { createContext, useContext , useReducer, useEffect} from 'react'
import './cart.css';
import ContextCart from '../Context/ContextCart';
import { products } from './../Products/Products';
import { reducer } from './../reducer/reducer';

export const CartContext = createContext();

const initialState = {
  item: products,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
    // const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);
    const [state, dispatch] = useReducer(reducer, initialState)

    const removeItem = (id) => {
      return dispatch({
        type: "REMOVE_ITEM",
        payload: id
      });
    };

    const clearCart = () => {
      return dispatch ({type: "CLEAR_CART"});
    };

    const increment = (id) => {
      return dispatch({
        type: "INCREMENT",
        payload: id
      })
    }

    const decrement = (id) => {
      return dispatch({
        type: "DECREMENT",
        payload: id
      })
    }

    useEffect(() => {
      dispatch({type: "GET_TOTAL"})
    }, [state.item])


  return (
   <>
   {/* <CartContext.Provider value={products}> */}
   <CartContext.Provider value={{...state, removeItem, clearCart, increment, decrement}}>

   <ContextCart/>
   </CartContext.Provider>
   </>
  )
}

export default Cart