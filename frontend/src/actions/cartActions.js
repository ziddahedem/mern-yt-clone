import axios from 'axios'
import { toast } from 'react-toastify'

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data.data.product._id,
      name: data.data.product.name,
      image: data.data.product.image,
      price: data.data.product.price,
      countInStock: data.data.product.countInStock,
      qty,
    },
  })

  if (data) {
    toast.success('Added To Cart')
  }

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = id => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  toast.error('Removed from Cart')

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
