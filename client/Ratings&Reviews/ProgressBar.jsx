import React, {useState} from 'react';
import FillerProgressBar from './FillerProgressBar.jsx';

const ProgressBar = ((props) => {
  // console.log('FROM PROGRESS BAR', props)
  const [percentage, setPercentage] = useState(0);
  // console.log('calc', Number(props.ratingArray[0])/props.totalEntries * 100)
  return(
    <div className='ratings'>
      <div>{props.star} stars</div>
      <FillerProgressBar percentage={props.percentage}/>
      <div>{props.value}</div>
    </div>
  )
})

export default ProgressBar;