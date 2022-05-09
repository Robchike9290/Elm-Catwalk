import React, {useState, useContext} from 'react';
import GaugeSelector from './GaugeSelector.jsx';
import {AppContext } from '../context.js';

const Gauge = ((props)=> {
  const {meta, charMeaning} = useContext(AppContext);
  let type = '';
  let typeRating = 0;
  const charMeaningGauge = {
    'Size': ['A size too small', 'Perfect', 'A size too wide'],
    'Width': ['Too narrow', 'Perfect', 'Too wide'],
    'Comfort': ['Uncomfortable', 'Ok', 'Perfect'],
    'Quality': ['Poor', 'What I expected', 'Perfect'],
    'Length': ['Runs Short', 'Perfect', 'Runs long'],
    'Fit': ['Runs tight', 'Perfect', 'Runs long']
  }

  for (var key in props.type) {
    type = key;
    typeRating = props.type[key].value;
  }

  return (
    <div>
      <p className='cc-gauge'>{type}</p>
      <GaugeSelector percentage={typeRating}/>
      <div className='cc-gauge-range'>
        <p>{charMeaningGauge[type][0]}</p>
        <p>{charMeaningGauge[type][1]}</p>
        <p>{charMeaningGauge[type][2]}</p>
      </div>
    </div>
  )
})

export default Gauge;