import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex space-x-8 p-4 justify-around">
        <div>
          <Link
            to={"/"}
            className="text-red-900 text-3xl font-extrabold tracking-wide "
          >
            Shop Cart
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6 ">
            <li>
              <Link
                to={"/"}
                className="text-red-900 hover:text-gray-300 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"cart"}
                className="text-red-900 hover:text-gray-300 transition duration-300"
              >
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
