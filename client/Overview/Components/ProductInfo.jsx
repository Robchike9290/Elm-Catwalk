/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react';
import ExpandedInfo from './ProductInfoComponents/ExpandedInfo.jsx';
import Socials from './ProductInfoComponents/Socials.jsx';
import StarRating from './ProductInfoComponents/StarRating.jsx';
import { AppContext } from '../../context.js';


const ProductInfo = () =>  {





  return (

    <div className="rl-ProductInfo">
      <ExpandedInfo />
      <StarRating/>
      <Socials/>




    </div>
  )


}

export default ProductInfo;