import React, { useState } from 'react';

const SortDropDown = (() => {
  const [isActive, setIsActive] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return(
    <div className='sort-menu'>
      {isOpen?
      <div>
        <ul>
          <li>Relevant</li>
          <li>Helpful</li>
          <li>Newest</li>
        </ul>
      </div>:
      <div>
        <div onClick={()=>setIsOpen(!isOpen)} className='sort-trigger'>Relevant</div>
      </div>
      }
    </div>
  )
})

export default SortDropDown;