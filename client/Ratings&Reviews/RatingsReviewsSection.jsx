/* eslint-disable no-unused-vars */
import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import Token from '../../config.js';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import ReviewList from './ReviewList.jsx'
import ModalAddReview from './ModalAddReview.jsx'
import {AppContext } from '../context.js';


const RatingsReviewsSection = (props) => {
  const {currentProductId, meta, setMeta, product, setProduct, productresults, setProductResults} = useContext(AppContext);
  // console.log('CURRENTID', currentProductId)
  const {id} = props;
  const[sort, setSort] = useState('relevant');
  const [addreview, setAddReview] = useState(false)
  const [total, setTotal] = useState({totalEntries: 100, totalPoints: 1});
  const [starpoint, setStarPoint] = useState([]);
  const [rHelpful, setRHelpful] = useState(false)
  const [reported, setReported] = useState(false);
  const [selectedratings, setSelectedRatings] = useState([])
  const [selectedLength, setSelectedLength] = useState(0)

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${currentProductId}&count=${total.totalEntries}&sort=${sort}&page=1`, {headers: {'Authorization': Token.TOKEN}})

    .then((data)=>{
      setProduct(data.data)
    })
  },[currentProductId, sort, total.totalEntries, rHelpful, reported]);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta?product_id=${currentProductId}`, {headers: {'Authorization': Token.TOKEN}})
    .then((data)=>{
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

  useEffect(() => {
    if (!selectedratings.length && product.results) {
      return setProductResults(product.results)
    }

    const filteredProduct = product?.results?.filter((item, i) => {
      return selectedratings.some((element)=> {
        return element === item.rating
      })
    })
    const results = filteredProduct || []
    setProductResults(results)
  },[selectedLength, product])



  return (
    <div className='cc-R-R-parent'>
      <p className='cc-heading' id="ReviewAnchor">RATINGS & REVIEWS</p>
      <div className='cc-modalContainer'>
      <ModalAddReview addreview={addreview} setAddReview={setAddReview}/>
      </div>
      <div className='cc-container'>
       <ReviewBreakdown total={total} setTotal={setTotal} starpoint={starpoint} selectedratings={selectedratings} setSelectedRatings={setSelectedRatings} setSelectedLength={setSelectedLength}/>
       <ReviewList sort={sort} setSort={setSort} addreview={addreview} setAddReview={setAddReview} rHelpful={rHelpful} setRHelpful={setRHelpful} reported={reported} setReported={setReported}/>
      </div>
    </div>
  )
}

export default RatingsReviewsSection;