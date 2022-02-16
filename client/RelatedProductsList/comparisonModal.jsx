import React from 'react';
import XButton from './xButton.jsx';

const ComparisonModal = (props) => {
  return (
    <div>
      <table>
        <caption>Comparing</caption>
        <thead>
          <tr>
            <th>Current Product Name</th>
            <th>Characteristic</th>
            <th>Compared Product Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Value</td>
            <td>Characteristic</td>
            <td>Value</td>
          </tr>
          <tr>
            <td>Value</td>
            <td>Characteristic</td>
            <td>Value</td>
          </tr>
          <tr>
            <td>Value</td>
            <td>Characteristic</td>
            <td>Value</td>
          </tr>
        </tbody>
      </table>
      <XButton hideModal={props.hideModal}/>
    </div>
  );
}

export default ComparisonModal;