import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import google from "../assets/google.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { authDataContext } from "../context/authContext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../utils/FireBase";
import { userDataContext } from "../context/UserContext";

function Registration() {
  const navigate = useNavigate();
  const [show, seteShow] = useState(false);
  const { serverUrl } = useContext(authDataContext);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const {getCurrentUser} = useContext(userDataContext)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post( serverUrl + "/api/auth/register", { name, email, password }, { withCredentials: true });
      getCurrentUser();
      navigate("/");
      console.log(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  //   Signup with google

  const googleSignup = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      let name = user.displayName;
      let email = user.email;
      const result = await axios.post(
        serverUrl + "/api/auth/googlelogin",
        { name, email },
        { withCredentials: true }
      );
      getCurrentUser()
     navigate("/")
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
      {/* logo section */}
      <div
        className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer "
        onClick={() => navigate("/")}
      >
        <img className="w-[40px]" src={logo} alt="" />
        <h1 className="text-[22px] font-sans">OneCart</h1>
      </div>

      {/* register section */}
      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px] ">
        <span className="text-[25px] font-semibold">Registration Page</span>
        <span className="text-[16px] ">
          WelCome to OneCart, Place your Order
        </span>
      </div>

      {/* form section */}

      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          {/* Google Button */}
          <div
            onClick={googleSignup}
            className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer"
          >
            <img className="w-[20px]" src={google} alt="google" />
            Registration with Google
          </div>

          {/* OR Line */}
          <div className="w-[90%] flex items-center gap-4">
            <div className="flex-grow h-[1px] bg-[#96969635]"></div>
            <span className="text-white text-sm">OR</span>
            <div className="flex-grow h-[1px] bg-[#96969635]"></div>
          </div>

          {/* Input Field */}
          <div className=" w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px]">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              autoComplete="name"
              placeholder="Username"
              className="w-[90%] h-[45px] px-4 rounded-lg bg-[#1a1a1a50] text-white border border-[#96969635] focus:outline-none focus:border-purple-500"
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              autoComplete="email"
              placeholder="Enter your email"
              className="w-[90%] h-[45px] px-4 rounded-lg bg-[#1a1a1a50] text-white border border-[#96969635] focus:outline-none focus:border-purple-500"
            />

            <div className="relative w-[90%]">
              <input
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type={`${show ? "text" : "password"}`}
                placeholder="password"
                className="w-[100%] h-[45px] px-4 rounded-lg bg-[#1a1a1a50] text-white border border-[#96969635] focus:outline-none focus:border-purple-500"
              />
              <span
                className="text-[22px] absolute top-[12px] right-[20px] cursor-pointer "
                onClick={() => seteShow((prev) => !prev)}
              >
                {show ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Purple Button */}
            <button
              type="submit"
              className="w-[90%] h-[45px] bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold"
            >
              Create Account
            </button>

            <p className="flex gap-[10px]">
              You have any account?
              <span
                onClick={() => navigate("/login")}
                className="text-purple-500 hover:text-purple-700 cursor-pointer"
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
