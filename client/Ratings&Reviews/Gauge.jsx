import React, {useState, useContext} from 'react';
import GaugeSelector from './GaugeSelector.jsx';
// import FillerProgressBar from './FillerProgressBar.jsx'
import {AppContext } from '../context.js';

const Gauge = ((props)=> {
  const {meta, charMeaning} = useContext(AppContext)
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
  // console.log('prpostype', Object.keys(props.type))
  for (var key in props.type) {
    // console.log('GUAGEKEYS', key)
    type = key
    // console.log('GUAGEVALUES', props.type[key].value)
    typeRating = props.type[key].value
  }
  console.log('charMeaningGauge', charMeaningGauge[type][0])
  // console.log('charMeaningGauge', charMeaning)
  // console.log('GAUGE', type, typeRating, meta)
  return (
    <div>
      {/* <p style='margin-bottom: auto;'>{type}</p> */}
      <p className='gauge'>{type}</p>
      <GaugeSelector percentage={typeRating}/>
      <div className='gauge-range'>
        <p>{charMeaningGauge[type][0]}</p>
        <p>{charMeaningGauge[type][1]}</p>
        <p>{charMeaningGauge[type][2]}</p>
      </div>
    </div>
  )
})

export default Gauge;