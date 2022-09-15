import * as actions from '../actions/actionTypes';

const initialState = {
  category: [],
  categoryFilter: [],
  basicOverview: {},
  specifications: [],
  gallery: undefined,
  similarProducts: {},
  accessories: {},
  products: [],
  searchResults: {},
  singleProduct: {},
  productTypeFilter: [],
  manufacturerFilter: [],
  latest: [],
  error: null,
  loading: false,
  tabLoading: false,
};

// eslint-disable-next-line complexity
export function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actions.REQUEST_START:
      return { ...state, error: null, loading: true, gallery: undefined };

    case actions.TABS_REQUEST_START:
      return { ...state, error: null, tabLoading: true };

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

    case actions.PRODUCTS_LATEST_LOADED:
      return {
        ...state,
        latest: payload,
        error: null,
        loading: false,
      };
    case actions.PRODUCTS_LATEST_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actions.SEARCH_RESULTS_LOADED:
      return {
        ...state,
        searchResults: payload,
        error: null,
        loading: false,
      };
    case actions.SEARCH_RESULTS_LOAD_FAIL:
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
      return { ...state, basicOverview: payload, error: null, tabLoading: false };
    case actions.PRODUCT_BASIC_OVERVIEW_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        tabLoading: false,
      };
    case actions.PRODUCT_SPECIFICATIONS_LOADED:
      return { ...state, specifications: payload, error: null, tabLoading: false };
    case actions.PRODUCT_SPECIFICATIONS_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        tabLoading: false,
      };

    case actions.PRODUCT_GALLERY_LOADED:
      return { ...state, gallery: payload, error: null, tabLoading: false };
    case actions.PRODUCT_GALLERY_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        tabLoading: false,
      };

    case actions.PRODUCT_SIMILAR_LOADED:
      return {
        ...state,
        similarProducts: payload,
        error: null,
        loading: false,
      };
    case actions.PRODUCT_SIMILAR_LOAD_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case actions.PRODUCT_ACCESSORIES_LOADED:
      return {
        ...state,
        accessories: payload,
        error: null,
        loading: false,
      };
    case actions.PRODUCT_ACCESSORIES_LOAD_FAIL:
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
