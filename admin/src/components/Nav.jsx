import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import axios from "axios";
import { useContext } from "react";
import { authDataContext } from "../context/AuthContenxt";
import { adminDataContnext } from "../context/AdminContext";

function Nav() {
    const navigate =useNavigate()
    let {getAdmin } = useContext(adminDataContnext) 
    const {serverUrl} = useContext(authDataContext)

const handleLogout = async()=>{
try {
    const result = await axios.post(serverUrl+ "/api/auth/logout" ,{withCredentials:true})
    console.log(result.data)
    getAdmin()
    navigate("/login")
} catch (error) {
    console.log(error)
}
}


  return (

    <div
      className="w-[100vw] bg-[#dcdbdbf8] h-[70px] fixed top-0 z-10 flex items-center justify-between overflow-x-hidden  shadow-md shadow-black    px-[30px] ">

<div className="w-[30%] flex items-center justify-start gap-[10px] cursor-pointer" onClick={()=>navigate("/")} >
<img src={logo} alt="" className="w-[30px] " />
<h1 className="text-[25px] text-black font-sans">OneCart</h1>
</div>

<button onClick={handleLogout}  className=" text-[15px] hover:border-[2px] border-[#89daea] px-[20px] py-[10px] rounded-2xl cursor-pointer bg-[#000000ca] text-white ">LogOut</button>

      </div>
  );
}

export default Nav;
