import React from "react";
import pharmimg from "../../assets/Teal-pharm.jpg"
import pharmimg2 from "../../assets/Teal-pharm2.jpg"
import Marquee from "react-fast-marquee";
const Bunni = () => {
  return (
    <>
    <div className=" mx-auto mx-xl-0 my-0 my-xl-0 img-fluid photo" >
      <img src= {pharmimg2} alt="logo"  className="photo"/>
    </div>
    <div>
      <marquee behavior="" direction="" >
        <p className="fs-3">...Health  and beauty products you can trust!!</p> 
        
      </marquee>

    </div>
    </>
    

    
     
  
  )
}

export default Bunni;
