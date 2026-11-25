import Reveal from "./Reveal";

const SectionHeading = ({ eyebrow, title, children }) => (
  <Reveal>
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="h2">{title}</h2>
    {children && <p className="lede">{children}</p>}
  </Reveal>
);

export default SectionHeading;
