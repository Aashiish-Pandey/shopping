import { ActionTypes } from "../constants/action-types";
import fakeStoreApi from "../../apis/fakeStoreApi";
import axios from "axios";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ActionTypes.FETCH_PRODUCTS_REQUEST });
      const response = await fakeStoreApi.get("/products");
      dispatch({ type: ActionTypes.FETCH_PRODUCTS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ 
        type: ActionTypes.FETCH_PRODUCTS_FAILURE, 
        payload: error.message || "Failed to fetch products" 
      });
    }
  };
};

export const fetchProductById=(id)=>{

  return async (dispatch)=>{

    try {
      dispatch({type:ActionTypes.FETCH_PRODUCTS_REQUEST}) 
      const response = await fakeStoreApi.get(`/products/${id}`)
      dispatch({type:ActionTypes.SELECTED_PRODUCT,payload:response.data})
    }
    catch(error){
      dispatch({type:ActionTypes.FETCH_PRODUCTS_FAILURE,payload:error.message || "Failed to fetch product"})
    }
  }
}

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
