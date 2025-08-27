import React, { useContext, useState } from "react";

import logo from "../assets/logo.png";

import { IoSearch } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

import { FaRegUserCircle } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { BsCollection } from "react-icons/bs";
import { MdContacts } from "react-icons/md";

import { userDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { authDataContext } from "../context/authContext";
import { MdHome } from "react-icons/md";

import axios from "axios";

function Nav() {
  const { serverUrl } = useContext(authDataContext);
  const navigate = useNavigate();
  const { userData, getCurrentUser } = useContext(userDataContext);
  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  async function handleLogout() {
    try {
      const result = await axios.post(
        serverUrl + "/api/auth/logout",
        {},
        { withCredentials: true }
      );

      getCurrentUser();
      console.log(result.data);
    } catch (error) {
      console.log("Logout Error", error);
    }
  }

  return (
    <div className="w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">

      {/* logo */}
      <div className="w-[20%] lg:w-[30%] flex items-center justify-start  gap-[10px]">
        <img className="w-[40px]" src={logo} alt="" />
        <h1 className="text-[25px] font-sans  ">OneCart</h1>
      </div>

      <div className="w-[50%] lg:w-[40%] hidden md:flex ">
        <ul className="flex items-center justify-center gap-[19px] text-white ">
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            HOME
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            COLLECTION
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            ABOUT
          </li>
          <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            CONTACT
          </li>
        </ul>
      </div>

      <div className=" w-[30%] flex items-center justify-end gap-[20px]">
        {showSearch ? (
          <FaSearch
            onClick={() => setShowSearch((prev) => !prev)}
            className="w-[35px] h-[35px] text-[#000000] cursor-pointer"
          />
        ) : (
          <IoSearch
            onClick={() => setShowSearch((prev) => !prev)}
            className="w-[38px] h-[38px] text-[#000000] cursor-pointer"
          />
        )}

        {!userData && (
          <FaRegUserCircle
            onClick={() => setShowProfile((prev) => !prev)}
            className="w-[29px] h-[29px] text-[#000000] cursor-pointer"
          />
        )}

        {userData && (
          <div
            onClick={() => setShowProfile((prev) => !prev)}
            className="cursor-pointer w-[30px] h-[30px] bg-[#080808] text-[24px]  text-white rounded-full flex items-center justify-center  "
          >
            {userData?.user?.name?.slice(0, 1)}{" "}
          </div>
        )}

        <IoCartOutline className="hidden md:block  w-[38px] h-[38px] text-[#000000] cursor-pointer" />

        <p className="hidden  md:block absolute w-[18px] h-[18px] items-center flex justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-[23px]">
          10
        </p>
      </div>

      {/* search secion */}
      {showSearch && (
        <div className="w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center ">
          <input
            type="text"
            className="w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-white text-[18px] "
            placeholder="Search..."
          />
        </div>
      )}
      {/* profile */}

      {showProfile && (
        <div className="absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10 ">
          <ul className="w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-[white]">
            {!userData && (
              <li
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
                onClick={() => {
                  navigate("/login");
                  setShowProfile(false);
                }}
              >
                Login
              </li>
            )}

            {userData && (
              <li
                onClick={() => {
                  handleLogout();
                  setShowProfile(false);
                }}
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
              >
                Logout
              </li>
            )}

            <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">
              Orders
            </li>
            <li className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">
              About
            </li>
          </ul>
        </div>
      )}

      {/*  footer */}

      <div className="w-[100vw] h-[90px] text-[12px] flex items-center justify-between px-[20px] fixed bottom-0 left-0 bg-[#191818] md:hidden ">
        <button className="text-[white] flex items-center justify-center flex-col gap-[2px]">
          <MdHome className="w-[25px] h-[25px] text-white md:hidden " />
          Home
        </button>

        <button className="text-[white] flex items-center justify-center flex-col gap-[2px]">
          <BsCollection className="w-[25px] h-[25px] text-white md:hidden " />
          Collection
        </button>
        <button className="text-[white] flex items-center justify-center flex-col gap-[2px]">
          <MdContacts className="w-[25px] h-[25px] text-white md:hidden " />
          Conact
        </button>
        <button className="text-[white] flex items-center justify-center flex-col gap-[2px]">
          <IoCartOutline className="w-[25px] h-[25px] text-white md:hidden " />
          Cart
        </button>
      </div>
    </div>
  );
}

export default Nav;
