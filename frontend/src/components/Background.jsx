import React from "react";
import shirt from "../assets/t-shirtwomen2.jpg";
import shirt2 from "../assets/t-shirtwomen4.jpg";

function Background({ heroCount }) {
  if (heroCount === 0) {
    return <img
        src={shirt2}
        className="w-[100%] h-[100%] float-left overflow-auto object-cover"
        alt=""
      />
    ;
  } else if (heroCount === 1) {
    return   <img
        src={shirt}
        className="w-[100%] h-[100%] float-left overflow-auto object-cover"
        alt=""
      />
    ;
  } else if (heroCount === 2) {
    return  <img
        src={shirt2}
        className="w-[100%] h-[100%] float-left overflow-auto object-cover"
        alt=""
      />
  
  } else if (heroCount === 3) {
    return  <img
        src={shirt}
        className="w-[100%] h-[100%] float-left overflow-auto object-cover"
        alt=""
      />
  
  }
}

export default Background;
