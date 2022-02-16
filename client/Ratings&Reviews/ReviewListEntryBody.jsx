import React, {useState} from 'react'

const ReviewListEntryBody = ((props) => {
  console.log('ReviewListBody', props.body)
  const twofifty = props.body.length <= 250;
  // console.log(sixty)
  const truncated = props.body.substring(0, 249)
  // console.log('BODY', body.length, body)
  const [show, setShow] = useState(false)

  if (twofifty) {
    return (<p> {props.body} </p>);
  } else {
    return (
      <div>
        <p>{show ? props.body : truncated}</p>
        <p onClick={()=>setShow(true)}>Show More</p>
      </div>
    )
  }
})


export default ReviewListEntryBody;