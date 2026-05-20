import { logo } from "../../assets";
import { styles } from "../../styles";

const Footer = () => {
  return (
    <footer className="relative mt-16 border-t border-violet-900/30 bg-[#050816]">
      <div className={`${styles.paddingX} max-w-7xl mx-auto py-10 flex flex-col sm:flex-row items-center justify-between gap-6`}>
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start gap-2">
          <img src={logo} alt="0xwaya logo" className="w-10 h-10 object-contain" />
          <p className="text-secondary text-[14px]">
            &copy; {new Date().getFullYear()} 0xwaya — open source.
          </p>
        </div>

        {/* Center: view counter */}
        <a
          href="https://github.com/0xwaya"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
        >
          <img
            src="https://komarev.com/ghpvc/?username=0xwaya&color=854CE6&style=flat-square&label=Portfolio+Views"
            title="Portfolio views"
            alt="0xwaya portfolio views"
          />
        </a>

        {/* Scroll to top */}
        <a
          href="#about"
          className="flex items-center gap-2 bg-tertiary px-4 py-2 rounded-xl cursor-pointer hover:opacity-80 transition-opacity select-none"
          aria-label="Scroll to top"
        >
          <div className="border-2 border-white rounded-full h-8 w-5 flex justify-center">
            <div className="bg-white h-2 w-0.5 rounded-full mt-1.5 animate-bounce" />
          </div>
          <span className={`${styles.sectionSubText} text-[12px]`}>Back to top</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
