import axios from "axios";
import * as actions from "./actionTypes";
import config from "../components/services/config";
import { REQUEST_URL } from "../constant/constantURL";
import { checkManufacturer, checkProductTypes } from "./utils";

export const pageLoaded = (des) => ({
  type: actions.PAGE_LOADED,
  payload: "haha",
});

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

export const loadProductList =
  (categoryid, limit, offset, optional = undefined) =>
  async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    let checkManufacturerData;
    let checkProductTypeData;
    let isManufacturer;
    let isProductType;
    let url = `/products/?categoryid=${categoryid}&flag=category&limit=${limit}&offset=${offset}`;
    if (optional != undefined) {
      checkProductTypeData = (await checkProductTypes(categoryid)).data;
      isProductType = checkProductTypeData.some(
        (obj) => obj.valueid.toString() === optional
      );
      if (!isProductType) {
        checkManufacturerData = (await checkManufacturer(categoryid)).data;
        isManufacturer = checkManufacturerData.some(
          (obj) => obj.manufacturerid.toString() === optional
        );
        if (!isManufacturer) {
          url = `/products/?categoryid=${categoryid}&flag=category&limit=${limit}&offset=${offset}`;
          console.log(isManufacturer);
        } else {
          console.log(isManufacturer);
          url = `/products/?categoryid=${categoryid}&manufacturerid=${optional}&flag=manufacturer&limit=${limit}&offset=${offset}`;
        }
      } else {
        url = `/products/?categoryid=${categoryid}&valueid=${optional}&flag=producttype&limit=${limit}&offset=${offset}`;
      }
    }
    console.log(url);
    await axios
      .get(REQUEST_URL + url)
      .then((res) => {
        // console.log(res.data);
        if (res.data.count > 0) {
          dispatch({
            type: actions.PRODUCTS_LIST_LOADED,
            payload: res.data,
          });
        } else {
          dispatch({
            type: actions.PRODUCTS_LIST_LOAD_FAIL,
          });
        }
      })
      .catch(function (error) {
        // console.log(error);
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
      // console.log(res.data);
      dispatch({
        type: actions.PRODUCT_LOADED,
        payload: res.data,
      });
    })
    .catch(function (error) {
      console.log(error);
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
    .get(
      REQUEST_URL + `/category/filter/name/?categoryid=${parentcategoryid}`,
      config
    )
    .then((res) => {
      // console.log(res);
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
      // console.log(error);
      dispatch({
        type: actions.CATEGORY_FILTER_LOAD_FAIL,
      });
    });
};

export const productTypeFilterLoaded =
  (parentcategoryid) => async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    await axios
      .get(
        REQUEST_URL +
          `/product/type/filter/name/?categoryid=${parentcategoryid}`,
        config
      )
      .then((res) => {
        // console.log(res);
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
        // console.log(error);
        dispatch({
          type: actions.PRODUCT_TYPE_FILTER_LOAD_FAIL,
        });
      });
  };

export const manufacturerFilterLoaded =
  (parentcategoryid) => async (dispatch) => {
    dispatch({
      type: actions.REQUEST_START,
    });
    await axios
      .get(
        REQUEST_URL +
          `/manufacturer/filter/name/?categoryid=${parentcategoryid}`,
        config
      )
      .then((res) => {
        // console.log(res);
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
        // console.log(error);
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
      // console.log(res.data);
      dispatch({
        type: actions.PRODUCT_BASIC_OVERVIEW_LOADED,
        payload: res.data,
      });
    })
    .catch(function (error) {
      console.log(error);
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
      // console.log(res.data);
      dispatch({
        type: actions.PRODUCT_SPECIFICATIONS_LOADED,
        payload: res.data,
      });
    })
    .catch(function (error) {
      console.log(error);
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
      // console.log(res.data);
      dispatch({
        type: actions.PRODUCT_GALLERY_LOADED,
        payload: res.data,
      });
    })
    .catch(function (error) {
      console.log(error);
      dispatch({
        type: actions.PRODUCT_GALLERY_LOAD_FAIL,
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
      // console.log(res.data);
      dispatch({
        type: actions.PRODUCT_SIMILAR_LOADED,
        payload: res.data,
      });
    })
    .catch(function (error) {
      console.log(error);
      dispatch({
        type: actions.PRODUCT_SIMILAR_LOAD_FAIL,
      });
    });
};
