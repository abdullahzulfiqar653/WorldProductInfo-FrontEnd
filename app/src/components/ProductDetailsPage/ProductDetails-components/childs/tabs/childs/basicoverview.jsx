import React, { useMemo } from 'react';
import Parser from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { loadBasicOverview } from '../../../../../../actions/actions';
import { getBasicOverviewTitles, checkLabel } from '../../../../common';
import Loader from '../../../../../common/SmallLoader';

const BasicOverView = ({ product }) => {
  const dispatch = useDispatch();
  const state = useSelector((s) => s);
  const { basicOverview, tabLoading } = state;

  useMemo(() => {
    dispatch(loadBasicOverview(product.productid));
  }, [product.productid, dispatch]);

  const displayBasicOverview = (basicoverview) => {
    const attribute_labels = Object.keys(basicoverview);
    const itemList = [];
    const headings = getBasicOverviewTitles(attribute_labels);
    headings.forEach(function (key, index) {
      itemList.push(
        <React.Fragment key={key}>
          <h4 style={{ marginTop: 15 }}>{key}</h4>
          <ol style={{ listStyleType: 'square' }}>
            {attribute_labels.map((label) => {
              const needComma = basicOverview[label].length > 1;
              return checkLabel(label, index + 1) && index + 1 === 1 ? (
                <li key={label}>
                  {label}:{' '}
                  {basicOverview[label].map((obj) =>
                    needComma ? Parser(obj.displayvalue + ', ') : Parser(obj.displayvalue),
                  )}
                </li>
              ) : (
                <>
                  {index + 1 > 1 &&
                    key === label &&
                    basicOverview[label].map((obj) => <li key={label}>{Parser(obj.displayvalue)}</li>)}
                </>
              );
            })}
          </ol>
        </React.Fragment>,
      );
    });
    return itemList;
  };
  return (
    <>
      {tabLoading ? (
        <div
          className="row"
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}>
          <div style={{ width: '100px' }}>
            <Loader />
          </div>
        </div>
      ) : (
        basicOverview && displayBasicOverview(basicOverview)
      )}
    </>
  );
};

export default BasicOverView;
