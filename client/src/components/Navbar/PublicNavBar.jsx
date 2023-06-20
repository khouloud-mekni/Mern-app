import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";
function PublicNavBar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div className="w-[100%] min-h-[80px] px-10 py-8 bg-black text-white flex justify-between items-center">
      <NavLink
        to="/"
        className="font-Popins font-bold text-xl text-white hover:text-[#943fca]"
      >
        Readify
      </NavLink>
      <div className=" min-w-[20%] flex justify-around items-center">
        {token ? (
          <NavLink
            to="/login"
            className="border-2 border-white px-4 py-2 font-medium text-white hover:text-[#943fca]"
            onClick={() => handleLogout()}
          >
            Logout
          </NavLink>
        ) : (
          <>
            <NavLink
              to="/login"
              className="border-2 border-white px-4 py-2 font-medium text-white hover:text-[#943fca]"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="border-2 border-black px-4 py-2 bg-white text-black font-medium hover:text-[#943fca]"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}

export default PublicNavBar
