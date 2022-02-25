import React, { useState, useEffect, useContext } from 'react';
// import { AppContext } from '../../context.js';

const MastHead = () => {
  const [theme, setTheme] = useState(false);
  const names = ['Elm Rags', 'CSS Simps', 'Cheryl\s Magical WonderStore', 'The Fighting Mongooses', 'Elmwood Designs', 'Elm Swag', 'Fashion Kitty']

  const handleThemeChange = () => {
    if (!theme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme(true);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      setTheme(false);
    }

  }

  return (

    <div className="rl-masthead">
      <div className='title-holder'>
      <h1>{names[Math.floor(Math.random() * 7)]}</h1>
      </div>
      <div className="theme-switch-wrapper">
        {!theme
        ? <button className="theme-switch" onClick={() => handleThemeChange()} type="checkbox" id="checkbox"><i className="fa-solid fa-circle-half-stroke"></i></button>
        : <button className="theme-switch" onClick={() => handleThemeChange()} type="checkbox" id="checkbox"><i className="fa-solid fa-circle-half-stroke"></i></button>

        }



      </div>

    </div>

  )

}

export default MastHead