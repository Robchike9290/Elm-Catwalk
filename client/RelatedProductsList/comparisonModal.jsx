import React, { useEffect, useState } from 'react';
import XButton from './xButton.jsx';

const ComparisonModal = (props) => {

  const [modalData, setModalData] = useState([]);

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
        } else if (currentProperty === 'price') {
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
        // TEST DATA - REMOVE AND REPLACE WITH REAL DATA ONCE RICHARD RECONSTRUCTS STATE FOR FURTHER TESTING
        currentProductValue = [{feature: 'Fabric', value: 'Kashmere'}, {feature: 'Sole', value: 'Rubber'}, {feature: 'Embroidery', value: 'True'}];

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
        <div className="modalNotScrollable">
          <caption className="modalTitle">Related Product vs. Current Product Comparison</caption>
          <thead className="modalHeading">
            <tr>
              <th className="modalHeading">Current Product Name</th>
              <th className="modalHeading">Characteristic</th>
              <th className="modalHeading">Related Product Name</th>
            </tr>
          </thead>
        </div>
        <div className="modalScrollable">
          <tbody>
            {modalData.map((row, index) => (
              <tr key={index}>
                <td className="modalColumn">{row[0]}</td>
                <td className="modalColumn">{row[1]}</td>
                <td className="modalColumn">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
      <XButton hideModal={props.hideModal}/>
    </div>
  );
}

export default ComparisonModal;