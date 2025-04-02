import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-blue-500 text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex">
          <ul className="flex gap-4 ml-auto">
            <li>
              <Link to="/" className="hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/owner" className="hover:text-gray-900">
                Owner
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="p-6 max-w-4xl mx-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
