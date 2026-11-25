// Builds public/Edward-Mercado-Resume.pdf (one Letter page) from src/data/profile.js using headless Chrome.
// Usage: npm run resume:pdf   (set CHROME_BIN to override the browser path)
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";
import {
  capabilities, certifications, earlier, education, experience, github, profile, projects, skillGroups, statuses,
} from "../src/data/profile.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "public", "Edward-Mercado-Resume.pdf");

const dir = mkdtempSync(path.join(tmpdir(), "resume-"));
const images = [];
const thumb = (rel, width, name) => {
  images.push({ rel, width, name });
  return pathToFileURL(path.join(dir, name)).href;
};

const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const bare = (u) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const tag = (s) => `<span class="tag tag-${s}">${esc(statuses[s].label)}</span>`;
const byId = Object.fromEntries(projects.map((p) => [p.id, p]));
const link = (p) => p.live || p.caseStudy || p.repo;

const certFiles = {
  ccip: "ccip-chainlink-masterclass", functions: "chainlink-functions-masterclass", campbuidl: "campbuidl-2023",
  fvm: "fvm-space-warp-poap", ethonline: "ethonline-2023-poap",
};

const caps = capabilities
  .map((c) => `<li><div class="row"><b>${esc(c.title)}</b>${tag(c.status)}</div><p>${esc(c.short)}</p></li>`)
  .join("");

const work = ["wayalabs", "queen-city-soundboard", "urban-stone", "ceo-agent-system", "echo", "radartv", "moon-phases", "openjaw-core"]
  .map((id) => byId[id])
  .map(
    (p) => `<li><div class="row"><a href="${link(p)}"><b>${esc(p.name)}</b></a>${tag(p.status)}</div><p>${esc(p.short)} <a class="url" href="${link(p)}">${esc(bare(link(p)))}</a></p></li>`
  )
  .join("");

const [waya, devrel, cne, stone] = experience;
const job = (j, bullets) => `<article>
  <div class="row"><b>${esc(j.company)}</b><span class="muted">${esc(j.roles.map((r) => `${r.title}, ${r.dates}`).join(" · "))}</span></div>
  <ul>${bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul></article>`;

const exp = [
  job(waya, [
    "Ship custom chatbots, lead systems and web platforms for local businesses. Live client work: Urban Stone Collective and Queen City Soundboard.",
    "Scope each engagement in a one-week discovery (written brief, go or no-go), then prototype, deploy and hand off.",
    "Research LangGraph multi-agent orchestration and sandboxed OpenClaw and Grok operator environments with gated tools and human approval, separate from client delivery.",
    "Earlier: full-stack EVM applications and custom contracts on Ethereum and Avalanche.",
  ]),
  job(devrel, ["Captain-program contributor: technical documentation and learning resources for DevRel cohorts."]),
  job(cne, ["General Manager. Operations and team leadership."]),
  job(stone, ["Owned and ran a countertop fabrication business for ten years; site and lead system rebuilt through WayaLabs."]),
].join("");

const earlierLine = earlier.map((e) => `${esc(e.title)}, ${esc(e.org)} (${esc(e.dates.replace(/\b[A-Z][a-z]{2} /g, "").replace("–", "-"))})`).join(" · ");

const poaps = certifications.filter((c) => c.poap);
const others = [...certifications.filter((c) => !c.poap), ...education];

const poapList = poaps
  .map((c) => `<li><a href="${c.href}"><b>${esc(c.title)}</b></a><span class="muted"> · ${esc(c.issued)}</span></li>`)
  .join("");
const poapStrip = poaps
  .map((c) => `<a href="${c.href}"><img src="${thumb(`src/assets/certificates/${certFiles[c.image]}.webp`, 160, `${c.image}.jpg`)}" alt=""></a>`)
  .join("");
const otherList = others
  .map((c) => `<li><a href="${c.href}"><b>${esc(c.title)}</b></a><span class="muted"> · ${esc(c.issuer)}, ${esc(c.issued)}</span></li>`)
  .join("");

const skills = skillGroups
  .filter((g) => g.id !== "web3")
  .map((g) => `<div><b>${esc(g.label)}</b><p>${esc(g.items.join(", "))}</p></div>`)
  .join("");
const web3 = skillGroups.find((g) => g.id === "web3");

const font = path.join(root, "node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2");

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>${esc(profile.name)} - Resume</title>
<style>
@font-face{font-family:"InterV";src:url("${pathToFileURL(font).href}") format("woff2");font-weight:100 900}
@page{size:Letter;margin:0}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:8.5in;height:11in}
html{font-family:"InterV",Inter,system-ui,sans-serif;font-size:7.55pt;line-height:1.38;color:#161a26;-webkit-print-color-adjust:exact;print-color-adjust:exact}
a{color:inherit;text-decoration:none}
ul{list-style:none}
.page{display:grid;grid-template-rows:auto 1fr;height:11in;padding:.34in .4in .3in}
.head{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;padding-bottom:9px;border-bottom:2px solid #161a26;position:relative}
.head::after{content:"";position:absolute;left:0;bottom:-2px;width:64px;height:2px;background:#5b5cf0}
h1{font-size:23pt;line-height:1;letter-spacing:-.02em;font-weight:700}
.role{margin-top:4px;font-size:9.6pt;color:#3a4156;font-weight:550}
.tagline{margin-top:3px;font-size:8pt;color:#5b5cf0;font-weight:600}
.contact{text-align:right;font-size:7.5pt;color:#3a4156;line-height:1.5}
.cols{display:grid;grid-template-columns:1fr 2.55in;gap:.2in;margin-top:10px;min-height:0}
h2{font-size:6.7pt;letter-spacing:.17em;text-transform:uppercase;color:#5b5cf0;font-weight:700;padding-bottom:3px;border-bottom:1px solid #e3e6ee;margin:10px 0 5px}
.main h2:first-child,.side h2:first-child{margin-top:0}
b{font-weight:650}
p{color:#2b3144}
.muted{color:#5d6478;font-weight:400}
.summary{font-size:8pt;line-height:1.45;color:#161a26}
.row{display:flex;justify-content:space-between;align-items:center;gap:8px}
.list>li{margin-bottom:4px;break-inside:avoid}
.list p{font-size:7.2pt;line-height:1.32}
.url{color:#5b5cf0;font-weight:500}
.caps{display:grid;grid-template-columns:1fr 1fr;gap:4px 12px}
.caps li{margin:0}
.tag{font-size:5.6pt;font-weight:700;letter-spacing:.07em;text-transform:uppercase;padding:.5px 4.5px;border-radius:99px;border:1px solid;white-space:nowrap}
.tag-live{color:#047857;border-color:#a7e3cc;background:#ecfaf4}
.tag-research{color:#a16207;border-color:#f1d9a0;background:#fff8e6}
.tag-template{color:#4338ca;border-color:#c7c9fb;background:#f0f0ff}
.tag-archive{color:#5d6478;border-color:#dfe2ea;background:#f5f6f9}
.exp article{margin-bottom:5px;break-inside:avoid}
.exp .row{font-size:7.6pt;align-items:baseline}
.exp ul{margin:1px 0 0 10px;list-style:disc}
.exp li{margin-bottom:1px;font-size:7.2pt;line-height:1.32;color:#2b3144}
.earlier{font-size:6.7pt;color:#5d6478;line-height:1.4;margin-top:3px}
.side{background:#f5f6fb;border:1px solid #e8eaf3;border-radius:8px;padding:10px 11px}
.side h2{border-color:#dcdff0}
.gh{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;text-align:center}
.gh div{background:#fff;border:1px solid #e3e6ee;border-radius:5px;padding:3px 0}
.gh strong{display:block;font-size:10pt;line-height:1.1;letter-spacing:-.01em}
.gh span{font-size:5.6pt;color:#5d6478;text-transform:uppercase;letter-spacing:.06em}
.side p{font-size:7.1pt;line-height:1.35}
.side .skills>div{margin-bottom:3px}
.side .skills p{margin-top:0}
.sidelist li{margin-bottom:2.5px;font-size:7pt;line-height:1.3}
.strip{display:flex;gap:5px;margin:5px 0 2px}
.strip img{width:.36in;height:.36in;border-radius:50%;display:block;border:1px solid #e3e6ee}
.note{font-size:6.3pt;color:#5d6478;margin-top:2px;line-height:1.3}
</style></head><body><div class="page">
<header class="head">
  <div>
    <h1>${esc(profile.name)}</h1>
    <p class="role">${esc(profile.roleLong)}</p>
    <p class="tagline">${esc(profile.tagline)}</p>
  </div>
  <div class="contact">
    ${esc(profile.location)} · <a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a><br>
    <a href="${profile.links.site.href}">${esc(profile.links.site.label)}</a> · <a href="${profile.links.github.href}">${esc(profile.links.github.label)}</a><br>
    <a href="${profile.links.linkedin.href}">${esc(profile.links.linkedin.label)}</a> · <a href="${profile.links.x.href}">${esc(profile.links.x.label)}</a>
  </div>
</header>
<div class="cols">
<div class="main">
  <h2>Profile</h2>
  <p class="summary">${esc(profile.summary)}</p>
  <h2>WayaLabs highlights</h2>
  <ul class="list caps">${caps}</ul>
  <h2>Selected work</h2>
  <ul class="list">${work}</ul>
  <h2>Experience</h2>
  <div class="exp">${exp}<p class="earlier"><b>Earlier:</b> ${earlierLine}</p></div>
</div>
<aside class="side">
  <h2>GitHub · 0xwaya</h2>
  <div class="gh">
    <div><strong>${github.repos}</strong><span>Repos</span></div>
    <div><strong>${github.commits}</strong><span>Commits</span></div>
    <div><strong>${github.pullRequests}</strong><span>PRs</span></div>
    <div><strong>${github.followers}</strong><span>Followers</span></div>
  </div>
  <p style="margin-top:4px">${esc(github.languages.join(", "))}. On GitHub since ${esc(github.joined)}.</p>

  <h2>Stack</h2>
  <div class="skills">${skills}<div><b>Web3 (earlier)</b><p>${esc(web3.items.join(", "))}</p></div></div>

  <h2>On-chain credentials (POAP)</h2>
  <div class="strip">${poapStrip}</div>
  <ul class="sidelist">${poapList}</ul>
  <p class="note">Minted on Gnosis. Each title links to its on-chain token page.</p>

  <h2>Certifications &amp; education</h2>
  <ul class="sidelist">${otherList}</ul>

  <h2>Languages</h2>
  <p>${profile.languages.map((l) => `${esc(l.name)} (${esc(l.level.toLowerCase())})`).join(" · ")}</p>
</aside>
</div></div></body></html>`;

const htmlPath = path.join(dir, "resume.html");
writeFileSync(htmlPath, html);
for (const { rel, width, name } of images) {
  await sharp(path.join(root, rel))
    .resize({ width, withoutEnlargement: true })
    .flatten({ background: "#ffffff" })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(dir, name));
}

const chrome = [process.env.CHROME_BIN, "/usr/local/bin/google-chrome", "/usr/bin/google-chrome", "/usr/bin/chromium", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"].find((p) => p && existsSync(p));
if (!chrome) throw new Error("Chrome not found. Set CHROME_BIN.");

mkdirSync(path.dirname(out), { recursive: true });
const started = Date.now();
try {
  execFileSync(
    chrome,
    ["--headless=new", "--no-sandbox", "--disable-gpu", "--no-pdf-header-footer", "--allow-file-access-from-files", `--print-to-pdf=${out}`, pathToFileURL(htmlPath).href],
    { stdio: "ignore", timeout: 45000 }
  );
} catch (err) {
  // Some headless Chrome builds write the PDF but never exit.
  const fresh = existsSync(out) && statSync(out).mtimeMs >= started;
  if (!(err.code === "ETIMEDOUT" && fresh)) throw err;
}
console.log(`Wrote ${path.relative(root, out)}`);
