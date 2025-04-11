import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Details from "./Pages/Details";
import Profile from "./Pages/Profile";
import UpdatePic from "./Pages/UpdatePic";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="details" element={<Details />} />
        <Route path="profile" element={<Profile />} />
        <Route path="updatepic" element={<UpdatePic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
