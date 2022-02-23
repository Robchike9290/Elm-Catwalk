import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context.js';
import XButton from './xButton.jsx';

const ComparisonModal = (props) => {

  const [modalData, setModalData] = useState([]);
  const context = useContext(AppContext);
  const currentProductFeatures = context.currentProductFeatures.features;

  const createTableData = () => {
    const nonFeatureRows = [];
    const featureRows = [];
    let allRows = [];
    const encounteredFeatures = [];

    for (let i = 0; i < props.modalProperties.length; i++) {
      let currentRow = [];
      let currentProductValue = props.currentProductValues[i];
      let currentProperty = props.modalProperties[i];
      let comparedProductValue = props.comparedProductValues[i];

      if (currentProperty !== 'features') {

        if (currentProperty === 'name') {
          currentProperty = 'Product Name';
        } else if (currentProperty === 'category') {
          currentProperty = 'Product Category';
        } else if (currentProperty === 'price' || currentProperty === 'default_price') {
          currentProperty = 'Regular Price';
        } else if (currentProperty === 'salesPrice') {
          currentProperty = 'Sales Price';
        }

        if (currentProductValue === null || currentProductValue === undefined) {
          currentProductValue = '';
        }

        if (comparedProductValue === null || comparedProductValue === undefined) {
          comparedProductValue = '';
        }

        currentRow[0] = currentProductValue;
        currentRow[1] = currentProperty;
        currentRow[2] = comparedProductValue;

        nonFeatureRows.push(currentRow);
      }

      if (currentProperty === 'features') {
        let currentProductValue = currentProductFeatures;

        if (currentProductValue.length) {
          for (let j = 0; j < currentProductValue.length; j++) {

            let currentFeature = currentProductValue[j];
            let comparedFeature = comparedProductValue[j];
            let matchingFeatureValue = '';
            let isFeaturedInBothProducts = false;

            if (comparedProductValue.length) {
              for (let k = 0; k < comparedProductValue.length; k++) {

                isFeaturedInBothProducts = false;
                let comparedFeature = comparedProductValue[k];

                if (JSON.stringify(currentFeature.feature) === JSON.stringify(comparedFeature.feature)) {
                  isFeaturedInBothProducts = true;
                  matchingFeatureValue = comparedFeature.value;
                  k = comparedProductValue.length;
                }

              }
            }

            if (isFeaturedInBothProducts) {

              let currentRow = [];
              currentRow[0] = currentFeature.value;
              currentRow[1] = currentFeature.feature;
              currentRow[2] = matchingFeatureValue;

              featureRows.push(currentRow);

            } else if (!isFeaturedInBothProducts) {

              let currentRow = [];
              currentRow[0] = currentFeature.value;
              currentRow[1] = currentFeature.feature;
              currentRow[2] = '';

              featureRows.push(currentRow);
            }

            encounteredFeatures.push(currentFeature.feature);
          }
        }

        if (comparedProductValue.length) {
          for (let j = 0; j < comparedProductValue.length; j++) {

            let comparedFeature = comparedProductValue[j];

            if (!encounteredFeatures.includes(comparedFeature.feature)) {
              let currentRow = [];
              currentRow[0] = '';
              currentRow[1] = comparedFeature.feature;
              currentRow[2] = comparedFeature.value;

              featureRows.push(currentRow);
              encounteredFeatures.push(comparedFeature[1]);
            }

          }
        }
      }
    }

    allRows = nonFeatureRows.concat(featureRows);

    setModalData(allRows);
  }

  useEffect(() => {
    createTableData();
  }, [])

  return (
    <div className="modal">
      <table>
        <caption className="modalTitle modalNotScrollable">Related Product vs. Current Product Comparison</caption>
        <thead className="modalHeading modalNotScrollable">
          <tr>
            <th className="modalHeadingColumn">Current Product Name</th>
            <th className="modalHeadingColumn">Characteristic</th>
            <th className="modalHeadingColumn">Related Product Name</th>
          </tr>
        </thead>
        <tbody className="modalScrollable">
          {modalData.map((row, index) => (
            <tr key={index}>
              <td className="modalColumn">{row[0]}</td>
              <td className="modalColumn">{row[1]}</td>
              <td className="modalColumn">{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <XButton hideModal={props.hideModal}/>
    </div>
  );
}

export default ComparisonModal;