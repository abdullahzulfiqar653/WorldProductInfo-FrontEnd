import {
  PAGE_LOAD_START,
  PAGE_LOADED,
  PAGE_LOAD_FAIL,
  CATEGORY_LOAD_START,
  CATEGORY_LOADED,
  CATEGORY_LOAD_FAIL,
  PRODUCTS_LIST_LOAD_START,
  PRODUCTS_LIST_LOADED,
  PRODUCTS_LIST_LOAD_FAIL,
  PRODUCT_LOAD_START,
  PRODUCT_LOADED,
  PRODUCT_LOAD_FAIL,
  CATEGORY_FILTER_LOADED,
  CATEGORY_FILTER_LOAD_START,
  CATEGORY_FILTER_LOAD_FAIL,
  PRODUCT_TYPE_FILTER_LOADED,
  MANUFACTURER_FILTER_LOAD_START,
  MANUFACTURER_FILTER_LOADED,
  MANUFACTURER_FILTER_LOAD_FAIL,
  PRODUCT_TYPE_FILTER_LOAD_START,
  PRODUCT_TYPE_FILTER_LOAD_FAIL,
} from "../actions/actionTypes";

const initialState = {
  category: [],
  categoryFilter: [],
  products: {},
  singleProduct: {},
  productTypeFilter: [],
  manufacturerFilter: [],
  error: null,
  loading: false,
};

export function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PAGE_LOAD_START:
      return { ...state, error: null, loading: true };

    case PAGE_LOADED:
      return {
        ...state,
        error: null,
        loading: false,
      };
    case PAGE_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case CATEGORY_LOAD_START:
      return { ...state, error: null, loading: true };

    case CATEGORY_LOADED:
      return {
        ...state,
        category: payload,
        error: null,
        loading: false,
      };
    case CATEGORY_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case PRODUCTS_LIST_LOAD_START:
      return { ...state, error: null, loading: true };

    case PRODUCTS_LIST_LOADED:
      return {
        ...state,
        products: payload,
        error: null,
        loading: false,
      };
    case PRODUCTS_LIST_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case PRODUCT_LOAD_START:
      return { ...state, error: null, loading: true };

    case PRODUCT_LOADED:
      return {
        ...state,
        singleProduct: payload,
        error: null,
        loading: false,
      };
    case PRODUCT_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case CATEGORY_FILTER_LOAD_START:
      return { ...state, error: null, loading: true };

    case CATEGORY_FILTER_LOADED:
      return {
        ...state,
        categoryFilter: payload,
        error: null,
        loading: false,
      };
    case CATEGORY_FILTER_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case PRODUCT_TYPE_FILTER_LOAD_START:
      return { ...state, error: null, loading: true };

    case PRODUCT_TYPE_FILTER_LOADED:
      return {
        ...state,
        productTypeFilter: payload,
        error: null,
        loading: false,
      };
    case PRODUCT_TYPE_FILTER_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case MANUFACTURER_FILTER_LOAD_START:
      return { ...state, error: null, loading: true };

    case MANUFACTURER_FILTER_LOADED:
      return {
        ...state,
        manufacturerFilter: payload,
        error: null,
        loading: false,
      };
    case MANUFACTURER_FILTER_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}
