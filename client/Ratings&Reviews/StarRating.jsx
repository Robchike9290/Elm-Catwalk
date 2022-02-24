/* eslint-disable no-unused-vars */
import React, {useState, useMemo} from 'react';

const StarRating = ((props)=> {
  const { fill = 'none'} = props;
  // console.log('FILL FROM STAR RATING', fill)
  return(
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={fill} viewBox="0 0 24 24" stroke="currentColor">
    <defs>
    <linearGradient id="grad25" x1="0" x2="1" y1="1" y2="100%">
    </linearGradient>
    <linearGradient id="grad50" x1="0" x2="1" y1="1" y2="100%">
      <stop offset="55%" stopColor="white"/>
      <stop offset="45%" stopColor="373f51"/>
    </linearGradient>
    <linearGradient id="grad75" x1="0" x2="1" y1="1" y2="100%">
      <stop offset="73%" stopColor="white"/>
      <stop offset="27%" stopColor="373f51"/>
    </linearGradient>
    <linearGradient id="grad100" x1="0" x2="0" y1="0" y2="100%">
      <stop offset="100%" stopColor="white"/>
      <stop offset="0%" stopColor="373f51"/>
    </linearGradient>
    </defs>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
  );
})

export default StarRating;

// DARK MODE STARS
{/* <linearGradient id="grad25" x1="0" x2="1" y1="1" y2="100%">
<stop offset="20%" stopColor="white"/>
<stop offset="80%" stopColor="#373f51"/>
</linearGradient>
<linearGradient id="grad50" x1="0" x2="1" y1="1" y2="100%">
<stop offset="55%" stopColor="white"/>
<stop offset="45%" stopColor="373f51"/>
</linearGradient>
<linearGradient id="grad75" x1="0" x2="1" y1="1" y2="100%">
<stop offset="73%" stopColor="white"/>
<stop offset="27%" stopColor="373f51"/>
</linearGradient>
<linearGradient id="grad100" x1="0" x2="0" y1="0" y2="100%">
<stop offset="100%" stopColor="white"/>
<stop offset="0%" stopColor="373f51"/>
</linearGradient> */}

//LIGHT MODE STARS
{/* <defs>
<linearGradient id="grad25" x1="0" x2="1" y1="1" y2="100%">
    <stop offset="20%" stopColor="black"/>
    <stop offset="80%" stopColor="white"/>
</linearGradient>
<linearGradient id="grad50" x1="0" x2="1" y1="1" y2="100%">
    <stop offset="55%" stopColor="black"/>
    <stop offset="45%" stopColor="white"/>
</linearGradient>
<linearGradient id="grad75" x1="0" x2="1" y1="1" y2="100%">
    <stop offset="73%" stopColor="black"/>
    <stop offset="27%" stopColor="white"/>
</linearGradient>
<linearGradient id="grad100" x1="0" x2="0" y1="0" y2="100%">
    <stop offset="100%" stopColor="black"/>
    <stop offset="0%" stopColor="white"/>
</linearGradient>
</defs> */}