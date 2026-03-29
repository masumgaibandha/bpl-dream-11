import React from "react";
import logoImg from "../../assets/logo.png";
import dollerImg from "../../assets/currency.png";

const Navbar = ({ coins }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm py-4 md:py-6">
      <div className="w-11/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="navbar-start w-full md:w-auto justify-center md:justify-start">
          <a className="btn btn-ghost text-xl p-0">
            <img
              src={logoImg}
              alt="Logo"
              className="w-28 sm:w-32 md:w-auto"
            />
          </a>
        </div>

        <div className="navbar-end w-full md:w-auto flex flex-col sm:flex-row gap-4 sm:gap-5 items-center justify-center md:justify-end">
          <ul className="menu menu-horizontal flex flex-wrap justify-center px-1 text-sm sm:text-base">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>

          <div className="flex gap-2 items-center">
            <span className="font-bold text-sm sm:text-base">
              {coins} Coins
            </span>
            <img
              src={dollerImg}
              alt="Currency"
              className="w-5 h-5 sm:w-6 sm:h-6 pt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;