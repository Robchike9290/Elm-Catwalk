import React, {useState} from 'react';
import FillerProgressBar from './FillerProgressBar.jsx';

const ProgressBar = ((props) => {
  // console.log('FROM PROGRESS BAR', props)
  const [percentage, setPercentage] = useState(0);
  // console.log('calc', Number(props.ratingArray[0])/props.totalEntries * 100)
  return(
    <div className='ratings'>
      <p>{props.star} stars</p>
      <FillerProgressBar percentage={props.percentage}/>
      <p>{props.value}</p>
    </div>
  )
})

export default ProgressBar;