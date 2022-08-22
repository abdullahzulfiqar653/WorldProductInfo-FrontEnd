import http from '../components/services/httpService';
import config from '../components/services/config';
import { REQUEST_URL } from '../constant/constantURL';

export const checkProductTypes = async (parentcategoryid) => {
  const response = http.get(REQUEST_URL + `/product/type/filter/name/?categoryid=${parentcategoryid}`, config);
  return response;
};

export const checkManufacturer = async (parentcategoryid) => {
  const response = http.get(REQUEST_URL + `/manufacturer/filter/name/?categoryid=${parentcategoryid}`, config);
  return response;
};

export function getFormBody(details) {
  return Object.keys(details)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(details[key]))
    .join('&');
}
