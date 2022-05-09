import React, {useState} from 'react';

const ReviewListEntryBody = ((props) => {
  const twofifty = props.body.length <= 250;
  const truncated = props.body.substring(0, 249);;
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