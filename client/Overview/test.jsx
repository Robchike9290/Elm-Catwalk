import React, { useState, useContext, useEffect }from 'react';
import { AppContext } from '../context.js'
import axios from 'axios';



const Test  = () => {
  const context = useContext(AppContext);

  // console.log(context);
  useEffect(() => {
    axios.get('/products')
      .then((data) => {
        context.setCurrentProductId(data.data[0].id)


      })
      .catch((err) => {
        console.error(err);
      })
  }, [])

  return (
    <div>
      {context.currentProductId}
    </div>
  )

}

export default Test;