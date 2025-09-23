import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className=" w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white relative">
      Home
      <Nav />
      <Sidebar/>
      
      
    </div>
  );
}

export default Home;

