import axios from 'axios';
import * as actions from './actionTypes';
import config from '../components/services/config';
import { REQUEST_URL } from '../constant/constantURL';

export const pageLoaded = (des) => ({
  type: actions.PAGE_LOADED,
  payload: 'haha',
});

export const loadAccessories = (productid) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + `/products/?productid=${productid}&flag=accessories`, config)
    .then((res) => {
      dispatch({
        type: actions.PRODUCT_ACCESSORIES_LOADED,
        payload: res.data,
      });
    })
    .catch(function (error) {
      dispatch({
        type: actions.PRODUCT_ACCESSORIES_LOAD_FAIL,
      });
    });
};

export const loadCategory = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + `/category/`, config)
    .then((res) => {
      dispatch({
        type: actions.CATEGORY_LOADED,
        payload: res.data,
      });
    })
    .catch(function (error) {
      dispatch({
        type: actions.CATEGORY_LOAD_FAIL,
      });
    });
};

export const loadProductList = (limit, offset, params) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  const url = `/products/?${params}&limit=${limit}&offset=${offset}`;
  await axios
    .get(REQUEST_URL + url)
    .then((res) => {
      dispatch({
        type: actions.PRODUCTS_LIST_LOADED,
        payload: res.data,
      });
    })
    .catch(function (error) {
      dispatch({
        type: actions.PRODUCTS_LIST_LOAD_FAIL,
      });
    });
};

export const productLoaded = (productid) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + `/product/${productid}`)
    .then((res) => {
      dispatch({
        type: actions.PRODUCT_LOADED,
        payload: res.data,
      });
    })
    .catch(function (error) {
      dispatch({
        type: actions.PRODUCT_LOAD_FAIL,
      });
    });
};

export const categoryFilterLoaded = (parentcategoryid) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + `/category/filter/name/?categoryid=${parentcategoryid}`, config)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: actions.CATEGORY_FILTER_LOADED,
          payload: res.data,
        });
      } else {
        dispatch({
          type: actions.CATEGORY_FILTER_LOAD_FAIL,
        });
      }
    })
    .catch(function (error) {
      dispatch({
        type: actions.CATEGORY_FILTER_LOAD_FAIL,
      });
    });
};

export const productTypeFilterLoaded = (parentcategoryid) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + `/product/type/filter/name/?categoryid=${parentcategoryid}`, config)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: actions.PRODUCT_TYPE_FILTER_LOADED,
          payload: res.data,
        });
      } else {
        dispatch({
          type: actions.PRODUCT_TYPE_FILTER_LOAD_FAIL,
        });
      }
    })
    .catch(function (error) {
      dispatch({
        type: actions.PRODUCT_TYPE_FILTER_LOAD_FAIL,
      });
    });
};

export const manufacturerFilterLoaded = (parentcategoryid) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + `/manufacturer/filter/name/?categoryid=${parentcategoryid}`, config)
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: actions.MANUFACTURER_FILTER_LOADED,
          payload: res.data,
        });
      } else {
        dispatch({
          type: actions.MANUFACTURER_FILTER_LOAD_FAIL,
        });
      }
    })
    .catch(function (error) {
      dispatch({
        type: actions.MANUFACTURER_FILTER_LOAD_FAIL,
      });
    });
};

export const loadBasicOverview = (productid) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + `/product/basic/over/view/${productid}`)
    .then((res) => {
      dispatch({
        type: actions.PRODUCT_BASIC_OVERVIEW_LOADED,
        payload: res.data,
      });
    })
    .catch(function (error) {
      dispatch({
        type: actions.PRODUCT_BASIC_OVERVIEW_LOAD_FAIL,
      });
    });
};

export const loadSpecifications = (productid) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + `/product/specification/${productid}`)
    .then((res) => {
      dispatch({
        type: actions.PRODUCT_SPECIFICATIONS_LOADED,
        payload: res.data,
      });
    })
    .catch(function (error) {
      dispatch({
        type: actions.PRODUCT_SPECIFICATIONS_LOAD_FAIL,
      });
    });
};

export const loadGallery = (productid) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + `/product/gallery/${productid}`)
    .then((res) => {
      dispatch({
        type: actions.PRODUCT_GALLERY_LOADED,
        payload: res.data,
      });
    })
    .catch(function (error) {
      dispatch({
        type: actions.PRODUCT_GALLERY_LOAD_FAIL,
      });
    });
};

export const loadLatestProducts = () => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + `/products/?flag=latest`)
    .then((res) => {
      dispatch({
        type: actions.PRODUCTS_LATEST_LOADED,
        payload: res.data,
      });
    })
    .catch(function (error) {
      dispatch({
        type: actions.PRODUCTS_LATEST_LOAD_FAIL,
      });
    });
};

export const loadSimilarProducts = (productid) => async (dispatch) => {
  dispatch({
    type: actions.REQUEST_START,
  });
  await axios
    .get(REQUEST_URL + `/products/?productid=${productid}&flag=similar`)
    .then((res) => {
      dispatch({
        type: actions.PRODUCT_SIMILAR_LOADED,
        payload: res.data,
      });
    })
    .catch(function (error) {
      dispatch({
        type: actions.PRODUCT_SIMILAR_LOAD_FAIL,
      });
    });
};
