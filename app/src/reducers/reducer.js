import * as actions from "../actions/actionTypes";

const initialState = {
  category: [],
  categoryFilter: [],
  basicOverview: [],
  specifications: [],
  gallery: [],
  similarProducts: {},
  products: [],
  singleProduct: {},
  productTypeFilter: [],
  manufacturerFilter: [],
  error: null,
  loading: false,
};

export function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.REQUEST_START:
      return { ...state, error: null, loading: true };

    case actions.PAGE_LOADED:
      return {
        ...state,
        error: null,
        loading: false,
      };
    case actions.PAGE_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actions.CATEGORY_LOADED:
      return {
        ...state,
        category: payload,
        error: null,
        loading: false,
      };
    case actions.CATEGORY_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actions.PRODUCTS_LIST_LOADED:
      return {
        ...state,
        products: payload,
        error: null,
        loading: false,
      };
    case actions.PRODUCTS_LIST_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actions.PRODUCT_LOADED:
      return {
        ...state,
        singleProduct: payload,
        error: null,
        loading: false,
      };
    case actions.PRODUCT_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actions.PRODUCT_BASIC_OVERVIEW_LOADED:
      return { ...state, basicOverview: payload, error: null, loading: true };
    case actions.PRODUCT_BASIC_OVERVIEW_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case actions.PRODUCT_SPECIFICATIONS_LOADED:
      return { ...state, specifications: payload, error: null, loading: true };
    case actions.PRODUCT_SPECIFICATIONS_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actions.PRODUCT_GALLERY_LOADED:
      return { ...state, gallery: payload, error: null, loading: true };
    case actions.PRODUCT_GALLERY_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actions.PRODUCT_SIMILAR_LOADED:
      return { ...state, similarProducts: payload, error: null, loading: true };
    case actions.PRODUCT_SIMILAR_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actions.CATEGORY_FILTER_LOADED:
      return {
        ...state,
        categoryFilter: payload,
        error: null,
        loading: false,
      };
    case actions.CATEGORY_FILTER_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actions.PRODUCT_TYPE_FILTER_LOADED:
      return {
        ...state,
        productTypeFilter: payload,
        error: null,
        loading: false,
      };
    case actions.PRODUCT_TYPE_FILTER_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actions.MANUFACTURER_FILTER_LOADED:
      return {
        ...state,
        manufacturerFilter: payload,
        error: null,
        loading: false,
      };
    case actions.MANUFACTURER_FILTER_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}
