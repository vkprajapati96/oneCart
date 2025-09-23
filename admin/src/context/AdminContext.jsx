import React, { createContext, useContext } from "react";
import { authDataContext } from "./AuthContenxt";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export const adminDataContnext = createContext();

function AdminContext({ children }) {
  const { serverUrl } = useContext(authDataContext);
  const [adminData, setAdminData] = useState(null);

  const getAdmin = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/user/getadmin", {
        withCredentials: true,
      });

      setAdminData(result.data)
      console.log(result.data)
    } catch (error) {
      setAdminData(null)
      console.log("admin Error",error)
    }

  };

  useEffect(()=>{
    getAdmin()

  },[])

  let value = {
    getAdmin,
    adminData,setAdminData
  };

  return (
    <div>
      <adminDataContnext.Provider value={value}>
        {children}
      </adminDataContnext.Provider>
    </div>
  );
}

export default AdminContext;
