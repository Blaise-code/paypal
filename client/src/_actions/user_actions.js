import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TO_CART_USER,
    GET_CART_ITEMS_USER,
    REMOVE_CART_ITEM_USER,
    ON_SUCCESS_BUY_USER
} from './types';
import { USER_SERVER } from '../components/Config.js';

export const registerUser = async (dataToSubmit) => {
    const request = await axios.post(`${USER_SERVER}/register`, dataToSubmit)

    return {
        type: REGISTER_USER,
        payload: request.data
    }
}

export const loginUser = async (dataToSubmit) => {
    const request = await axios.post(`${USER_SERVER}/login`, dataToSubmit)

    return {
        type: LOGIN_USER,
        payload: request.data
    }
}

export const auth = async () => {
    const request = await axios.get(`${USER_SERVER}/auth`)

    return {
        type: AUTH_USER,
        payload: request.data
    }
}

export const logoutUser = async () => {
    const request = await axios.get(`${USER_SERVER}/logout`)

    return {
        type: LOGOUT_USER,
        payload: request.data
    }
}


export const addToCart = async (_id) => {
    const request = await axios.get(`${USER_SERVER}/addToCart?productId=${_id}`)

    return {
        type: ADD_TO_CART_USER,
        payload: request.data
    }
}



export const getCartItems = async (cartItems, userCart) => {
    const request = await axios.get(`/api/product/products_by_id?id=${cartItems}&type=array`)
    if (request.data) {
        userCart.forEach(cartItem => {
            request.data.forEach((productDetail, i) => {
                    if (cartItem.id === productDetail._id) {
                        response.data[i].quantity = cartItem.quantity;
                    }
        })
        }

    return {
        type: GET_CART_ITEMS_USER,
        payload: request.data
    }
}




export const removeCartItem = async (id) => {
    const request = await axios.get(`/api/users/removeFromCart?_id=${id}`)
    if (request.data) {
         response.data.cart.forEach(item => {
                response.data.cartDetail.forEach((k, i) => {
                    if (item.id === k._id) {
                        response.data.cartDetail[i].quantity = item.quantity
                    }
                })
            })
    }

    return {
        type: REMOVE_CART_ITEM_USER,
        payload: request.data
    }
}


export const onSuccessBuy = async (data) => {
    const request = await axios.post(`${USER_SERVER}/successBuy`, data)
    return {
        type: ON_SUCCESS_BUY_USER,
        payload: request.data
    }
}





