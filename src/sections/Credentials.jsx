import { useEffect, useState } from "react";
import { HiOutlineArrowUpRight, HiOutlineXMark, HiOutlineAcademicCap } from "react-icons/hi2";
import { certifications, education, profile } from "../data/profile";
import { brand, certImages } from "../data/assets";
import Reveal from "../components/ui/Reveal";
import SectionHeading from "../components/ui/SectionHeading";

const Badge = ({ cert }) => (
  <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[linear-gradient(145deg,#171a2b_0%,#0d0f16_70%)] p-4">
    <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/20 blur-2xl" aria-hidden="true" />
    <HiOutlineAcademicCap className="relative h-7 w-7 text-accent" aria-hidden="true" />
    <div className="relative">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">{cert.issuer}</p>
      <p className="mt-1 text-sm font-semibold leading-snug text-white">{cert.title}</p>
    </div>
  </div>
);

const Lightbox = ({ cert, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="card relative w-full max-w-3xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} aria-label="Close" className="btn-ghost absolute right-3 top-3 z-10 px-2 py-2">
          <HiOutlineXMark className="h-5 w-5" />
        </button>
        <div className="grid max-h-[80vh] place-items-center overflow-auto bg-black/40 p-4">
          <img src={certImages[cert.image]} alt={`${cert.title} certificate`} className="max-h-[60vh] w-auto rounded-lg" />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line p-4">
          <div>
            <p className="font-semibold text-white">{cert.title}</p>
            <p className="text-sm text-muted">
              {cert.issuer} · {cert.issued}
              {cert.credentialId ? ` · ${cert.poap ? "POAP #" : "ID "}${cert.credentialId}` : ""}
            </p>
          </div>
          <a href={cert.href} target="_blank" rel="noreferrer" className="btn-primary">
            {cert.poap ? "Verify on-chain" : "Verify"} <HiOutlineArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};

const CertCard = ({ cert, index, onOpen }) => {
  const image = cert.image ? certImages[cert.image] : null;
  const body = (
    <>
      <div className="aspect-[4/3] overflow-hidden border-b border-line bg-black/40">
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            className={`h-full w-full transition duration-500 group-hover:scale-[1.03] ${
              cert.track === "web3" && !["bootcamp"].includes(cert.image) ? "object-contain p-3" : "object-cover"
            }`}
          />
        ) : (
          <Badge cert={cert} />
        )}
      </div>
      <div className="p-4 text-left">
        <p className="text-sm font-semibold leading-snug text-white">{cert.title}</p>
        <p className="mt-1 text-xs text-muted">
          {cert.issuer} · {cert.issued}
        </p>
        {cert.poap ? (
          <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-live/30 bg-live/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-live">
            <span className="h-1.5 w-1.5 rounded-full bg-live" aria-hidden="true" />
            POAP · minted on Gnosis
          </p>
        ) : (
          cert.credentialId && <p className="mt-0.5 text-xs text-muted/80">ID {cert.credentialId}</p>
        )}
      </div>
    </>
  );
  const cls = "card group block w-full overflow-hidden transition hover:border-white/15";
  return (
    <Reveal as="li" delay={(index % 4) * 0.05}>
      {image ? (
        <button type="button" onClick={() => onOpen(cert)} className={cls} aria-label={`View ${cert.title} certificate`}>
          {body}
        </button>
      ) : (
        <a href={cert.href} target="_blank" rel="noreferrer" className={cls}>
          {body}
        </a>
      )}
    </Reveal>
  );
};

const Credentials = () => {
  const [active, setActive] = useState(null);
  const tiles = [...certifications, ...education.map((e) => ({ ...e, track: "web3" }))];

  return (
    <section id="credentials" className="section">
      <SectionHeading eyebrow="Credentials" title="Certifications and education">
        {certifications.length} credentials: on-chain POAPs from Chainlink, ETHDenver and ETHGlobal, plus Solidity, Python, Java, JavaScript, web design and developer relations. Open a card for the full image.
      </SectionHeading>

      <ul className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
        {tiles.map((c, i) => (
          <CertCard key={c.id} cert={c} index={i} onOpen={setActive} />
        ))}
      </ul>

      <Reveal className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="card p-6">
          <h3 className="text-sm font-semibold text-white">Languages</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {profile.languages.map((l) => (
              <li key={l.name} className="flex justify-between gap-4">
                <span className="text-soft">{l.name}</span>
                <span className="text-muted">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card flex items-center gap-4 p-6">
          <img src={brand.wayalabsMark} alt="" width="48" height="48" className="h-12 w-12 rounded-xl" />
          <p className="text-sm leading-6 text-muted">
            Five credentials are POAPs minted on Gnosis. Each card links to its on-chain token page, which shows the
            owner and metadata. The rest are listed on the{" "}
            <a className="text-accent hover:text-white" href={profile.links.linkedin.href} target="_blank" rel="noreferrer">
              LinkedIn profile
            </a>
            .
          </p>
        </div>
      </Reveal>

      {active && <Lightbox cert={active} onClose={() => setActive(null)} />}
    </section>
  );
};

export default Credentials;
