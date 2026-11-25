import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { HiOutlineArrowDownTray, HiOutlineArrowUpRight, HiOutlineEnvelope } from "react-icons/hi2";
import { profile, RESUME_PDF } from "../data/profile";
import Reveal from "../components/ui/Reveal";

const Contact = () => (
  <section id="contact" className="section">
    <Reveal className="card relative overflow-hidden p-8 sm:p-12">
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
      <p className="eyebrow relative">Contact</p>
      <h2 className="h2 relative max-w-xl">Have a process that needs a better connection between tools?</h2>
      <p className="lede relative">
        Start with a discovery call at WayaLabs, or write directly. I reply from {profile.email}.
      </p>

      <div className="relative mt-8 flex flex-wrap items-center gap-3">
        <a href={profile.links.contact.href} target="_blank" rel="noreferrer" className="btn-primary">
          Book a discovery call
          <HiOutlineArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <a href={`mailto:${profile.email}`} className="btn-ghost">
          <HiOutlineEnvelope className="h-4 w-4" aria-hidden="true" />
          {profile.email}
        </a>
        <a href={RESUME_PDF} download className="btn-ghost">
          <HiOutlineArrowDownTray className="h-4 w-4" aria-hidden="true" />
          Résumé PDF
        </a>
      </div>

      <ul className="relative mt-8 flex flex-wrap gap-5 text-sm text-muted">
        {[
          { href: profile.links.linkedin.href, label: "LinkedIn", Icon: BsLinkedin },
          { href: profile.links.github.href, label: "GitHub", Icon: BsGithub },
          { href: profile.links.x.href, label: "X", Icon: BsTwitterX },
        ].map(({ href, label, Icon }) => (
          <li key={label}>
            <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <Icon className="h-4 w-4" aria-hidden="true" /> {label}
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  </section>
);

export default Contact;
