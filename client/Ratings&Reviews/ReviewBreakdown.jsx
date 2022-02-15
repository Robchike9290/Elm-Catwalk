import React from 'react';

const ReviewBreakdown = ((props) => {
  console.log('METAfromBREAKDOWN', props)
  const ratings = props.meta.ratings ? props.meta.ratings : {};
  console.log('RATINGS', ratings)
  let average = Object.values(ratings)
  console.log('avg', average)


  const total = average.reduce((accum, number, index) => {
    const rating = index+1;
    const totalEntries = accum.totalEntries + Number(number);
    const totalPoints = number * rating + accum.totalPoints
    // console.log('TotalEntries', totalEntries)
    // console.log('TotalPoints', totalPoints)
    // console.log('Index', rating)
    return {totalEntries, totalPoints}
  }, {totalPoints: 1,totalEntries: 0})

  const rating = parseFloat((total.totalPoints / total.totalEntries).toFixed(1))
  // console.log('TOTAL', total)
  console.log('RATING', rating)

  return (
    <div className='breakdown'>
      <h3>{rating}, star rating (BO)</h3>
      <p> % of reviews recommend this product</p>
      <div>
        <p>5star Placeholder</p>
        <p>4star Placeholder</p>
        <p>3star Placeholder</p>
        <p>2star Placeholder</p>
        <p>1star Placeholder</p>
      </div>
      <div>
        <p>Size Bar Graph Placeholder</p>
      </div>
      <div>
        <p>Comfort Bar Graph Placeholder</p>
      </div>

    </div>
  )
})




export default ReviewBreakdown;