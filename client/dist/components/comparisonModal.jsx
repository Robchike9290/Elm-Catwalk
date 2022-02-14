import React from 'react';
import XButton from './xButton.jsx';

const ComparisonModal = () => {
  return (
    <div>
      <XButton />
      <table>
        <caption>Comparing</caption>
        <tr>
          <th>Current Product Name</th>
          <th>Characteristic</th>
          <th>Compared Product Name</th>
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
        <tr>
          <td>Value</td>
          <td>Characteristic</td>
          <td>Value</td>
        </tr>
      </table>
    </div>
  );
}

export default ComparisonModal;