import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { logo, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const linkRef = useRef(null);

  return (
    <nav className="px-5 w-full flex justify-center items-center py-2 fixed top-0 z-20 backdrop-blur-md">
      <div className="glow-on-hover w-full flex justify-between border rounded-lg px-2 items-center max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            0xwaya
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row items-center gap-10">
          <Link
            ref={linkRef}
            to="/project"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={`${active === "Projects" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            Projects
          </Link>

          <Link
            to="/play"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={`${active === "Playground" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            Playground
          </Link>

          <Link
            ref={linkRef}
            to="/experience"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={`${active === "Experience" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            Experience
          </Link>

          <Link
            to="/statistics"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={`${active === "Code Statistics" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            Code Statistics
          </Link>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <Link
                ref={linkRef}
                to="/project"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className={`${active === "Projects" ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                Projects
              </Link>

              <Link
                to="/play"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className={`${active === "Playground" ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                Playground
              </Link>

              <Link
                ref={linkRef}
                to="/experience"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className={`${active === "Experience" ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                Experience
              </Link>

              <Link
                to="/statistics"
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                className={`${active === "Code Statistics" ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                Code Statistics
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;