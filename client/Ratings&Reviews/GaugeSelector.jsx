import React, {useState} from 'react';

const GaugeSelector= ((props) => {
  // console.log('FROM FILLER', props)
  const [slider, setSlider] = useState({
    max: 5,
    min: 1,
    value: props.percentage
  })

  return (
    <div className='cc-range-slider'>
      <input type='range' min={slider.min} max={slider.max} value={props.percentage} readOnly='readOnly' className='cc-slider' id='myRange'></input>
    </div>
  )

})

export default GaugeSelector;