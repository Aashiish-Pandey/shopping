import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  loading: false,
  error: null
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true, error: null };
    case ActionTypes.FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: payload, loading: false, error: null };
    case ActionTypes.FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
