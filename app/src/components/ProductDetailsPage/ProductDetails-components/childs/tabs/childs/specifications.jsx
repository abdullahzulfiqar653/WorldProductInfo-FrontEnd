import React from 'react';
import _ from 'underscore';
import Parser from 'html-react-parser';
import { useSelector } from 'react-redux';
import Loader from '../../../../../common/SmallLoader';
// import { loadSpecifications } from '../../../../../../actions/actions';

const Specifications = ({ product, specifications }) => {
  // const dispatch = useDispatch();
  const state = useSelector((s) => s);
  const { loading } = state;

  // useMemo(() => {
  //   dispatch(loadSpecifications, product.productid);
  // }, [product.productid, dispatch]);

  const isPreasentinAttributes = (id, arrayOfObj) => {
    return arrayOfObj.some((obj) => obj.header_id === id);
  };

  const getOrderedUniqueList = (arrayOfObj) => {
    const orderedList = _.sortBy(arrayOfObj, 'displayorder');
    const uniqueList = [...new Map(orderedList.map((m) => [m.headerid, m])).values()];
    return uniqueList;
  };

  const tabSpecifications = (data) => {
    const headers = getOrderedUniqueList(data.categoryid.categoryHeader);
    const attributes = _.groupBy(specifications.productAttribute, 'header_id');
    function renderattributes(id) {
      const attributesList = attributes[id];
      const attributeTitles = _.groupBy(attributesList, 'atrribute_label');
      const attribute_labels = Object.keys(attributeTitles);
      return attribute_labels.map((label) => {
        const needComma = attributeTitles[label].length > 1;
        return (
          <tr key={label}>
            <td
              style={{
                padding: '0 15px',
                margin: '0 20px',
                width: '200px',
              }}
              align="right">
              {label}:
            </td>
            <td>
              {attributeTitles[label].map((obj) =>
                needComma ? Parser(obj.displayvalue + ', ') : Parser(obj.displayvalue),
              )}
            </td>
          </tr>
        );
      });
    }
    return headers.map(
      (header) =>
        isPreasentinAttributes(header.headerid, specifications.productAttribute) && (
          <div key={header.headerid}>
            <h4 style={{ marginBottom: '10px', marginTop: '20px' }}>{header.header_label}</h4>
            <hr style={{ margin: '5px' }} />
            <tbody>{renderattributes(header.headerid)}</tbody>
          </div>
        ),
    );
  };

  return (
    <>
      {loading ? (
        <div
          className="row"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '70vh',
          }}>
          <div style={{ width: '100px' }}>
            <Loader />
          </div>
        </div>
      ) : (
        specifications && tabSpecifications(specifications)
      )}
    </>
  );
};

export default Specifications;
