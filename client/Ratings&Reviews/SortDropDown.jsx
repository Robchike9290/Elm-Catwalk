import React, { useState } from 'react';

const SortDropDown = ((props) => {
  const [isOpen, setIsOpen] = useState(false);
  const sortTypes = {
    relevant: 'relevance',
    helpful: 'most helpful',
    newest: 'newest'
  };
  const handleSort = (sortType) => {
    props.setSort(sortType),
    setIsOpen(false);
  }

  return (
    <div className='cc-sortmenu'>
      {isOpen
      ?
      <div>
        <p onClick={()=>handleSort('relevant')}>relevance</p>
        <p onClick={()=>handleSort('helpful')}>most helpful</p>
        <p onClick={()=>handleSort('newest')}>newest</p>
      </div>
      :
      <div>
        <div onClick={()=>setIsOpen(!isOpen)} className='sort-trigger'>{sortTypes[props.sort]}⌵</div>
      </div>
      }
    </div>
  )
})

export default SortDropDown;