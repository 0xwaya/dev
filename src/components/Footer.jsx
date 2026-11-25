import { brand } from "../data/assets";
import { profile } from "../data/profile";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="container-page flex flex-col items-center justify-between gap-4 py-10 text-sm text-muted sm:flex-row">
      <div className="flex items-center gap-3">
        <img src={brand.waya0xMark} alt="" width="28" height="28" className="h-7 w-7 rounded-full" />
        <p>
          &copy; {new Date().getFullYear()} {profile.name} · {profile.handle}
        </p>
      </div>
      <p className="text-center sm:text-right">
        This portfolio is not the studio site. WayaLabs lives at{" "}
        <a className="text-soft underline-offset-4 hover:text-white hover:underline" href={profile.links.site.href}>
          wayalabs.com
        </a>
        .
      </p>
    </div>
  </footer>
);

export default Footer;
