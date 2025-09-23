import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lists from "./pages/Lists";
import Add from "./pages/Add";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import { useContext } from "react";
import { adminDataContnext } from "./context/AdminContext";

function App() {
  let { adminData } = useContext(adminDataContnext);
  return (
    <>
      {!adminData ? 
        <Login />
       : 
        <>
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/add" element={<Add />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      }
    </>
  );
}

export default App;
