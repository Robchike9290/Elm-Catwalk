import React, {useEffect, useState, useContext} from 'react';
import axios from 'axios';
import Token from '../../config.js';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import ReviewList from './ReviewList.jsx'
// import '../styles.css';
import ModalAddReview from './ModalAddReview.jsx'
import {AppContext } from '../context.js';
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// console.log(Token, '<--token', Token.TOKEN)

const RatingsReviewsSection = (props) => {
  const {currentProductId, meta, setMeta, product, setProduct, selectedratings, setSelectedRatings, productresults, setProductResults} = useContext(AppContext);
  // console.log('CURRENTID', currentProductId)
  const {id} = props;
  const[sort, setSort] = useState('relevant');
  const [addreview, setAddReview] = useState(false)
  const [total, setTotal] = useState({totalEntries: 100, totalPoints: 1});
  const [starpoint, setStarPoint] = useState([]);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews?product_id=${currentProductId}&count=${total.totalEntries}&sort=${sort}&page=1`, {headers: {'Authorization': Token.TOKEN}})

    .then((data)=>{
      // console.log("fromratingsreviews", data.data)
      // console.log("RESULTS", data.data.results.helpfulness)
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

  // console.log('PRODUCT--->FILTER', product)
  useEffect(() => {
    // console.log('PRODUCT HERE', product)
    if (!selectedratings.length && product.results) {
      return setProductResults(product.results)
    }
    // console.log('PRODUCT--->FILTER', product)
    const filteredProduct = product?.results?.filter((item, i) => {
      // console.log('PRODUCT--->ITEM', item)
      return selectedratings.some((element)=> {
        return element === item.rating
      })
      // console.log('TYPEOF SELECTED RATINGS', selectedratings.some)
    })
    const results = filteredProduct || []
    setProductResults(results)
    // console.log('FILTERED PRODUCT     ', filteredProduct)
  },[selectedratings, product])
  // console.log('TOTAL---->', starpoint)

  const updateHelpfulness = ((e, review_id) => {
    console.log('FIRSTupdateHelpfulness token', Token.TOKEN)

    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${review_id}/helpful`, {headers: {'Authorization': Token.TOKEN}})
    console.log('SECONDupdateHelpfulness token', Token.TOKEN)
    .then(() => {
      console.log(SUCCESS)
    })
    .catch((err) => {
      console.log('updateHelpfulness error', err)
    })
  })

  const updateReport = ((e, review_id) => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${review_id}/report`, {headers: {'Authorization': Token.TOKEN}})
    .then(() => {
      console.log(SUCCESS)
    })
    .catch((err)=> {
      console.log(('uspdateReport', err))
    })
  })

  // const addReviewModal = ((e) => {
  //   axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews')
  // })
  return (
    // console.log('PRODUCT', product);
    <div className='R-R-parent'>
      <h3>Ratings & Reviews</h3>
      <ModalAddReview addreview={addreview} setAddReview={setAddReview}/>
      <div className='container'>
       <ReviewBreakdown total={total} setTotal={setTotal} starpoint={starpoint}/>
       <ReviewList sort={sort} setSort={setSort} addreview={addreview} setAddReview={setAddReview} updateHelpfulness={updateHelpfulness} updateReport={updateReport}/>
       {/* <ReviewList sort={sort} setSort={setSort} addreview={addreview} setAddReview={setAddReview} /> */}
      </div>
    </div>
  )
}

export default RatingsReviewsSection;