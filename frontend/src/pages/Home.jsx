// import React, { useEffect } from "react";
// import { useState } from "react";
// import Background from "../components/Background";
// import Hero from "../components/Hero";

// function Home() {
//   let heroData = [
//     { text1: "30% oFF Limited Offer", text2: "Style that" },
//     { text1: "Discover the Best oF Blod Fashion", text2: "Limited time Only!" },
//     { text1: "Explore Our Best Collection ", text2: "Ship Now!" },
//     { text1: "Choose your perfect Fashion", text2: "Now on sale" },
//   ];

//   let [heroCount, setHeroCount] = useState(0);

//   useEffect(() => {
//     let interval = setInterval(() => {
//       setHeroCount((prev) => (prev === 3 ? 0 : prev + 1));
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025]">
//       <Background heroCount={heroCount} />
//       <Hero
//         heroCount={heroCount}
//         setHeroCount={setHeroCount}
//         heroData={heroData[heroCount]}
//       />
//     </div>
//   );
// }

// export default Home;

import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Background from "../components/Background";

  function Home() {
  let heroData = [
    { text1: "30% OFF Limited Offer", text2: "Style that" },
    { text1: "Discover the Best of Bold Fashion", text2: "Limited time Only!" },
    { text1: "Explore Our Best Collection", text2: "Shop Now!" },
    { text1: "Choose your perfect Fashion", text2: "Now on sale" },
  ];

  let [heroCount, setHeroCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setHeroCount((prev) => (prev === 3 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>

    <div className="w-screen h-screen bg-gradient-to-l from-[#141414] to-[#0c2025] flex lg:h-[100vh] md:h-[50vh] sm:h-[30vh] ">
      {/* Left side text */}
      <div className="w-1/2">
        <Hero
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          heroData={heroData[heroCount]}
        />
      </div>

      {/* Right side image */}
      <div className="w-1/2">
        <Background heroCount={heroCount} />
      </div>
    </div>
    </div>
  );
}

export default Home