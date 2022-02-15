import React, { useState } from 'react';

const SortDropDown = (() => {
  const [isActive, setIsActive] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);



  return(
    <div className='sortmenu'>
      {isOpen?
      <div>
        <p>relevance</p>
        <p>helpfulness</p>
        <p>newest</p>
      </div>:
      <div>
        <div onClick={()=>setIsOpen(!isOpen)} className='sort-trigger'>relevance</div>
      </div>
      }
    </div>
  )
})

export default SortDropDown;