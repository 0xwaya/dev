import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { logo, menu, close } from "../../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const linkRef = useRef(null);
  const handleNavigate = (label) => {
    setActive(label);
    setToggle(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 z-20 flex w-full items-center justify-center px-4 py-2 backdrop-blur-md sm:px-5">
      <div className="glow-on-hover flex w-full max-w-7xl items-center justify-between rounded-lg border px-3 py-2 sm:px-2">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            setToggle(false);
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
            onClick={() => handleNavigate("Projects")}
            className={`${active === "Projects" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            Projects
          </Link>

          <Link
            to="/playground"
            onClick={() => handleNavigate("Playground")}
            className={`${active === "Playground" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            Playground
          </Link>

          <Link
            ref={linkRef}
            to="/experience"
            onClick={() => handleNavigate("Experience")}
            className={`${active === "Experience" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
          >
            Experience
          </Link>

          <Link
            to="/statistics"
            onClick={() => handleNavigate("Code Statistics")}
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
              } absolute right-0 top-[4.5rem] z-10 mx-4 my-2 min-w-[180px] rounded-xl border border-white/10 black-gradient p-6 shadow-[0_18px_40px_rgba(15,23,42,0.45)]`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <Link
                ref={linkRef}
                to="/project"
                onClick={() => handleNavigate("Projects")}
                className={`${active === "Projects" ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                Projects
              </Link>

              <Link
                to="/playground"
                onClick={() => handleNavigate("Playground")}
                className={`${active === "Playground" ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                Playground
              </Link>

              <Link
                ref={linkRef}
                to="/experience"
                onClick={() => handleNavigate("Experience")}
                className={`${active === "Experience" ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
              >
                Experience
              </Link>

              <Link
                to="/statistics"
                onClick={() => handleNavigate("Code Statistics")}
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