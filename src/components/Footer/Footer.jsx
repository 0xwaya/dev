import { logo } from "../../assets";
import { styles } from "../../styles";

const socials = [
  { href: "https://wayalabs.com", label: "WayaLabs" },
  { href: "https://www.linkedin.com/in/0xwaya/", label: "LinkedIn" },
  { href: "https://github.com/0xwaya", label: "GitHub" },
  { href: "https://x.com/0xwaya", label: "X" },
];

const Footer = () => {
  return (
    <footer className="relative mt-16 border-t border-violet-900/30 bg-[#050816]">
      <div className={`${styles.paddingX} mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 py-10 sm:flex-row`}>
        <div className="flex flex-col items-center gap-2 sm:items-start">
          <img src={logo} alt="0xwaya logo" className="h-10 w-10 object-contain" />
          <p className="text-[14px] text-secondary">
            &copy; {new Date().getFullYear()} Edward Mercado · 0xwaya
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-secondary">
          {socials.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex cursor-pointer select-none items-center gap-2 rounded-xl bg-tertiary px-4 py-2 transition-opacity hover:opacity-80"
          aria-label="Back to top"
        >
          <span className={`${styles.sectionSubText} text-[12px]`}>Back to top</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
