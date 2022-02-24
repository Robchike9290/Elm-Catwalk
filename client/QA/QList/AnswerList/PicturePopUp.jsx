import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Token from "../../../../config.js";
import { qListContext } from "../../../../client/QA/createContextQlist.js";
import { productIdContext } from "../../../../client/QA/createContext.js";

const PicturePopUp = ({ currentPicture, changeTogglePicture }) => {


  return (
    <div className="a_modal" onClick={() =>{ return changeTogglePicture(false)}} >
      <div className="a_modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="a_modal-header">
        <img className="thumb" src={currentPicture} ></img>
       <button onClick={() =>{ return changeTogglePicture(false)}}>exit</button>
        </div>


      </div>
    </div>
  );
};

export default PicturePopUp;
