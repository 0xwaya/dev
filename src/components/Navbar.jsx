import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineArrowDownTray, HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { brand } from "../data/assets";
import { navSections, profile, RESUME_PDF } from "../data/profile";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const home = pathname === "/";
  const href = (id) => (home ? `#${id}` : `/#${id}`);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/80 backdrop-blur-xl">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <Link to="/" onClick={close} className="flex items-center gap-2.5 text-white">
          <img src={brand.wayalabsMark} alt="" width="32" height="32" className="h-8 w-8 rounded-lg" />
          <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navSections.map((s) => (
            <li key={s.id}>
              <a href={href(s.id)} className="rounded-lg px-3 py-2 text-sm text-muted transition hover:text-white">
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <Link to="/play" className="rounded-lg px-3 py-2 text-sm text-muted transition hover:text-white">
              Playground
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <a href={RESUME_PDF} download className="btn-primary hidden sm:inline-flex">
            <HiOutlineArrowDownTray className="h-4 w-4" aria-hidden="true" />
            Résumé PDF
          </a>
          <button
            type="button"
            className="btn-ghost px-2.5 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiOutlineXMark className="h-5 w-5" /> : <HiOutlineBars3 className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-ink lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {navSections.map((s) => (
              <li key={s.id}>
                <a href={href(s.id)} onClick={close} className="block rounded-lg px-2 py-3 text-soft hover:text-white">
                  {s.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/play" onClick={close} className="block rounded-lg px-2 py-3 text-soft hover:text-white">
                Playground
              </Link>
            </li>
            <li className="pt-2">
              <a href={RESUME_PDF} download className="btn-primary w-full">
                <HiOutlineArrowDownTray className="h-4 w-4" aria-hidden="true" />
                Download résumé (PDF)
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
