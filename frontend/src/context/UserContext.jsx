import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { authDataContext } from "./authContext";

export const userDataContext = createContext();

function UserContext({ children }) {
  const { serverUrl } = useContext(authDataContext);

  const [userData, setUserData] = useState(null);  
  const [loading, setLoading] = useState(true); 



  const getCurrentUser = async () => {
    try {
      const result = await axios.get(serverUrl+"/api/user/getcurrentuser", {
        withCredentials: true, 
      });
      setUserData(result.data);
      console.log(result.data);
    } catch (error) {
      console.log("GetCurrentUser Error:", error.response?.data || error.message);
      setUserData(null);
    } finally {
      setLoading(false);
    }
  };

  //  useEffect se jab app load ho tab call hoga
  useEffect(() => {
    getCurrentUser();
  }, []);

  const value = {
    userData,
    setUserData,

    getCurrentUser,
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContext;
