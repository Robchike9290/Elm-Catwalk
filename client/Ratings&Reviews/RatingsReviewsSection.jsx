import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import Token from '../../config.js';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import ReviewList from './ReviewList.jsx'
import '../styles.css';
import ModalAddReview from './ModalAddReview.jsx'
import {AppContext } from '../context.js';
// console.log(Token, '<--token')

const RatingsReviewsSection = (props) => {
  const {currentProductId, meta, setMeta, product, setProduct} = useContext(AppContext)
  // console.log('CURRENTID', currentProductId)
  const {id} = props;
  // console.log(props)
  // const[product, setProduct] = useState({});
  // const[meta, setMeta] = useState ([]);
  const[sort, setSort] = useState('relevant');
  const [addreview, setAddReview] = useState(false)
  const [total, setTotal] = useState({totalEntries: 100, totalPoints: 1})
  const [starpoint, setStarPoint] = useState([])

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${currentProductId}&count=${total.totalEntries}&sort=${sort}&page=1`, {headers: {'Authorization': Token.TOKEN}})
    .then((data)=>{
      console.log("fromratingsreviews", data.data)
      console.log("RESULTS", data.data.results.helpfulness)
      setProduct(data.data)
    })
  },[currentProductId, sort, total.totalEntries]);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${currentProductId}`, {headers: {'Authorization': Token.TOKEN}})
    .then((data)=>{
      // console.log("META", data.data)
      setMeta(data.data)
      let average = Object.values(data.data.ratings)
      const total = average.reduce((accum, number, index) => {
        const rating = index+1;
        const totalEntries = accum.totalEntries + Number(number);
        const totalPoints = number * rating + accum.totalPoints
        return {totalEntries, totalPoints}
      }, {totalPoints: 1,totalEntries: 0})
      setTotal(total)
      setStarPoint(average)
    })
  },[currentProductId]);
  // console.log('TOTAL---->', starpoint)
  return (
    // console.log('PRODUCT', product);
    <div>
      <h3>Ratings & Reviews</h3>
      <ModalAddReview addreview={addreview} setAddReview={setAddReview}/>
      <div className='container'>
       {/* <ReviewBreakdown meta={meta} total={total} setTotal={setTotal} starpoint={starpoint}/> */}
       <ReviewBreakdown total={total} setTotal={setTotal} starpoint={starpoint}/>
       <ReviewList sort={sort} setSort={setSort} addreview={addreview} setAddReview={setAddReview}/>
      </div>
    </div>
  )
}

export default RatingsReviewsSection;