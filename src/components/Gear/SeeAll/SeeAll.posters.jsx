import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const SeeAllPoster = () => {
  const [apparelData, setapparelData] = useState([]);

  useEffect(() => {
    axios
      .get("https://obscure-citadel-15133.herokuapp.com/gear/posters/?size=18")
      .then((res) => {
        setapparelData(res.data.gear);
      });
  }, []);

  return (
    <>
     
<<<<<<< HEAD
      {/* All Products */}
      <div id="apparel-items-part"  style={{ "margin-top": "5em" }}>
=======
      <div id="apparel-items-part" style={{ "margin-top": "5em" }}>
>>>>>>> b34f91f8f2f097669f14b4a787cd364c326ec2c5
        <div id="apparel-heading-part">
          <p className="apparel-heading-rohit">All Products</p>
          <p>SEE ALL</p>
        </div>
        <div id="all-card-container" style={{ "margin-top": "2em" }}>
          {apparelData.map((curElem) => {
            return (
             <Link to={`/gear/${curElem._id}`}>
                <div key={curElem._id}>
                <div id="apparel-items-content">
                  <div id="apparel-item-card">
                    <div id="apparel-item-img-part">
                      <img src={curElem.image} alt="" />
                    </div>
                    <div
                      id="apparel-item-title-part"
                      style={{ "margin-bottom": "5em" }}
                    >
                      <p>{curElem.name}</p>
                      <p>€ {curElem.price}</p>
                    </div>
                    
                  </div>
                </div>
              </div>
             </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SeeAllPoster;
