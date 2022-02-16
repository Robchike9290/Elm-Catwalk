import React from 'react';
import XButton from './xButton.jsx';

const ComparisonModal = (props) => {
  return (
    <div className="modal">
      <table>
        <div className="modalNotScrollable">
          <caption className="modalTitle">Comparing</caption>
          <thead className="modalHeading">
            <tr>
              <th className="modalColumn">Current Product Name</th>
              <th className="modalColumn">Characteristic</th>
              <th className="modalColumn">Compared Product Name</th>
            </tr>
          </thead>
        </div>
        <div className="modalScrollable">
          <tbody>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
            <tr>
              <td className="modalColumn">Value</td>
              <td className="modalColumn">Characteristic</td>
              <td className="modalColumn">Value</td>
            </tr>
          </tbody>
        </div>
      </table>
      <XButton hideModal={props.hideModal}/>
    </div>
  );
}

export default ComparisonModal;