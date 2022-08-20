import axios from "axios";
import config from "../components/services/config";
import { REQUEST_URL } from "../constant/constantURL";

export const checkProductTypes = async (parentcategoryid) => {
  let response;
  await axios
    .get(
      REQUEST_URL + `/product/type/filter/name/?categoryid=${parentcategoryid}`,
      config
    )
    .then((res) => {
      response = res.data;
    })
    .catch();
  return response;
};
