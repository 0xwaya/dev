import { statuses } from "../../data/profile";

const tone = {
  live: "border-live/30 bg-live/10 text-live",
  research: "border-research/30 bg-research/10 text-research",
  template: "border-accent/30 bg-accent/10 text-accent",
  archive: "border-line bg-white/5 text-muted",
};

const StatusPill = ({ status }) => (
  <span
    title={statuses[status].hint}
    className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${tone[status]}`}
  >
    {status === "live" && <span className="h-1.5 w-1.5 rounded-full bg-live" aria-hidden="true" />}
    {statuses[status].label}
  </span>
);

export default StatusPill;
