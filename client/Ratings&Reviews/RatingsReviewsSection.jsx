import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Token from '../../config.js';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import ReviewList from './ReviewList.jsx'
import '../styles.css';
// console.log(Token, '<--token')

const RatingsReviewsSection = (props) => {
  const {id} = props;
  // console.log(props)
  const[product, setProduct] = useState({});
  const[meta, setMeta] = useState ([]);
  const[sort, setSort] = useState('relevant');

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${id}&count=169&sort=${sort}&page=1`, {headers: {'Authorization': Token.TOKEN}})
    .then((data)=>{
      // console.log("fromratingsreviews", data.data)
      setProduct(data.data)
    })
  },[props.id, sort]);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${id}`, {headers: {'Authorization': Token.TOKEN}})
    .then((data)=>{
      // console.log("META", data)
      setMeta(data.data)
    })
  },[props.id]);

  return (
    // console.log('PRODUCT', product);
    <div>
      <h3>Ratings & Reviews</h3>
      <div className='container'>
       <ReviewBreakdown meta={meta}/>
       <ReviewList product={product} sort={sort} setSort={setSort}/>
      </div>
    </div>
  )
}

export default RatingsReviewsSection;