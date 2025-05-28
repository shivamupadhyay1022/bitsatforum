import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md fixed z-[100] left-0 right-0 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl sm:text-2xl font-bold flex items-center text-blue-800">
            BITSAT Forum
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 justify-center items-center text-gray-300 font-semibold">
          {[
            "Home",
            "About",
            "Practice",
            "Mock",
            "Pricing",
            "FAQ",
            "Contact",
          ].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase().replace(" ", "-")}`}
                className={({ isActive }) =>
                  `hover:text-blue-500 ${
                    isActive
                      ? "text-blue-500 border-b-2 border-blue-500 pb-1"
                      : "text-gray-400"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
          <li>
            {currentUser ? (
              <button
                className="p-2 rounded-xl text-white bg-orange-500 flex gap-2"
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      toast.success("Signed Out Successfully", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                      navigate("/");
                    })
                    .catch((error) => {
                      toast.error(error.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                  />
                </svg>
                Sign Out
              </button>
            ) : (
              <button
                className="p-2 rounded-xl text-white bg-orange-500 flex gap-2"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                  />
                </svg>
                Sign In
              </button>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button (SVG Heroicons) */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {menuOpen ? (
            // XMarkIcon (Close Button)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Bars3Icon (Hamburger Menu)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <>
          {/* Overlay to close menu when clicking outside */}
          <div
            className="fixed inset-0 bg-black bg-opacity-25 md:hidden z-[100]"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          ></div>
          <div className="md:hidden bg-white shadow-md absolute w-full left-0 top-[72px] border-t border-gray-100 z-[101]">
            <ul className="flex flex-col items-center space-y-4 font-semibold py-6 px-4 text-gray-400">
              {[
                "Home",
                "About",
                "Practice",
                "Mock",
                "Pricing",
                "FAQ",
                "Contact",
              ].map((item) => (
                <li key={item} className="w-full">
                  <NavLink
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className={({ isActive }) =>
                      `block py-3 px-4 text-lg w-full text-center rounded-lg ${
                        isActive
                          ? "text-blue-500 bg-blue-50 font-bold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`
                    }
                    onClick={() => setMenuOpen(false)} // Close menu on click
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
              <li className="w-full">
                {currentUser ? (
                  <button
                    className="p-2 rounded-xl text-white w-full text-center justify-center bg-orange-500 flex gap-2"
                    onClick={() => {
                      signOut(auth)
                        .then(() => {
                          toast.success("Signed Out Successfully", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                          });
                          navigate("/");
                        })
                        .catch((error) => {
                          toast.error(error.message, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                          });
                        });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                      />
                    </svg>
                    Sign Out
                  </button>
                ) : (
                  <button
                    className="p-2 rounded-xl text-white w-full text-center justify-center bg-orange-500 flex gap-2"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                      />
                    </svg>
                    Sign In
                  </button>
                )}
              </li>
            </ul>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
