import React, { useState } from 'react';

const SortDropDown = ((props) => {
  const [isOpen, setIsOpen] = useState(false);
  const sortTypes = {
    relevant: 'relevance',
    helpful: 'most helpful',
    newest: 'newest'
  }
  const handleSort = (sortType) => {
    props.setSort(sortType),
    setIsOpen(false)
  }

  return(
    <div className='sortmenu'>
      {isOpen?
      <div>
        <p onClick={()=>handleSort('relevant')}>relevance</p>
        <p onClick={()=>handleSort('helpful')}>most helpful</p>
        <p onClick={()=>handleSort('newest')}>newest</p>
      </div>:
      //! the ptags above act weird when the dropdown is activated, option, div look ok but still weird, check css
      // <select>
      //   <option onClick={()=>handleSort('relevant')}>relevance</option>
      //   <option onClick={()=>handleSort('helpful')}>most helpful</option>
      //   <option onClick={()=>handleSort('newest')}>newest</option>
      // </select>:

      <div>
        <div onClick={()=>setIsOpen(!isOpen)} className='sort-trigger'>{sortTypes[props.sort]}⌵</div>
      </div>
      }
    </div>
  )
})

export default SortDropDown;