import React from "react";
import { Link } from "react-router-dom";

const navList = [
  { name: "Home", path: "/" },
  { name: "News", path: "/news" },
  { name: "Documents", path: "/documents" },
  { name: "PDFs", path: "/pdfs" },
  { name: "Media", path: "/media" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function NavBar() {
  return (
    <div className="navbar bg-slate-700 p-3 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg mt-9 dropdown-content z-[1] p-2 shadow rounded-box w-64 bg-slate-700"
          >
            {navList.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-10 border border-solid p-4 flex items-center gap-3">
          <Link to="/">
            <img
              src={require("../Media/logo.png")}
              alt="logo"
              className="lg:block h-20 hidden"
            />
          </Link>
          <div className="flex flex-col">
            <h1 className="text-md font-bold">Septembrists</h1>
            <h1 className="text-md font-bold">Սեպտեմբերացիներ</h1>
            </div>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg gap-4">
          {navList.map((item, index) => (
            <li key={index}>
              <Link className="hover:bg-slate-500" to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end lg:hidden gap-4">
        <Link to="/">
          <img
            src={require("../Media/logo.png")}
            alt="logo"
            className="h-20 lg:hidden"
          />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
