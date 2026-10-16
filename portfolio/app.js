// =============================================================
// app.js — renders window.PROFILE (profile.js) into index.html.
// One render function per section; no framework, no build step.
// =============================================================
(function () {
  "use strict";
  const P = window.PROFILE;
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = (name, cls = "h-4 w-4") => `<i data-lucide="${name}" class="${cls}" aria-hidden="true"></i>`;

  // Shared section shell: label + heading + optional intro
  const shell = (label, heading, intro, body) => `
    <div class="gutter mx-auto max-w-page py-14 md:py-20">
      <div class="mb-8 flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
        <div>
          <p class="font-mono text-xs uppercase tracking-[0.12em] text-accent">// ${esc(label)}</p>
          <h2 class="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">${esc(heading)}</h2>
        </div>
        ${intro ? `<p class="max-w-md text-muted">${esc(intro)}</p>` : ""}
      </div>
      ${body}
    </div>`;

  const NAV = [["roles", "Roles"], ["impact", "Impact"], ["work", "Work"], ["experience", "Experience"], ["skills", "Skills"], ["contact", "Contact"]];

  function renderNav() {
    $("#nav").innerHTML = NAV.map(([id, label]) =>
      `<a href="#${id}" class="cursor-pointer whitespace-nowrap rounded-md px-3 py-2 text-sm text-ink2 transition-colors duration-200 hover:bg-soft hover:text-ink">${label}</a>`).join("");
  }

  // profile.json card: a small syntax-highlighted view of the profile
  function jsonCard() {
    const data = {
      name: P.name,
      roles: P.roles,
      domain: ["payments", "fintech", "lending"],
      experience_years: P.yearsExperience,
      shipped: ["LLM text-to-SQL", "LLM ticket routing", "credit-risk ML"],
      languages: Object.fromEntries(P.languages.map((l) => [l.name, l.level])),
      location: `${P.location} → open to UK`,
    };
    const fmt = (v) => typeof v === "number" ? `<span class="text-amber-700">${v}</span>`
      : Array.isArray(v) ? `[${v.map(fmt).join(", ")}]`
      : typeof v === "object" ? `{ ${Object.entries(v).map(([k, x]) => `<span class="text-ink2">"${esc(k)}"</span>: ${fmt(x)}`).join(", ")} }`
      : `<span class="text-up">"${esc(v)}"</span>`;
    const lines = Object.entries(data).map(([k, v]) => `  <span class="text-accent-ink">"${esc(k)}"</span>: ${fmt(v)}`).join(",\n");
    return `
      <div class="overflow-hidden rounded-xl border border-line bg-card">
        <div class="flex items-center justify-between border-b border-line bg-soft px-4 py-2">
          <span class="font-mono text-xs text-muted">profile.json</span>
          <span class="flex gap-1.5" aria-hidden="true"><span class="h-2.5 w-2.5 rounded-full bg-line"></span><span class="h-2.5 w-2.5 rounded-full bg-line"></span><span class="h-2.5 w-2.5 rounded-full bg-line"></span></span>
        </div>
        <pre class="overflow-x-auto whitespace-pre-wrap break-words p-4 font-mono text-[12.5px] leading-relaxed text-ink">{\n${lines}\n}</pre>
      </div>`;
  }

  function renderHero() {
    $("#hero").innerHTML = `
      <div class="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
        <div class="min-w-0">
          <div class="flex items-center gap-4">
            <img src="${esc(P.photo)}" alt="Portrait of ${esc(P.name)}" width="88" height="88" class="h-20 w-20 rounded-2xl border border-line object-cover object-top md:h-24 md:w-24">
            <div>
              <p class="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-ink2">
                <span class="h-2 w-2 rounded-full bg-up" aria-hidden="true"></span>Open to new roles
              </p>
              <p class="mt-2 flex items-center gap-1.5 text-sm text-muted">${icon("map-pin", "h-4 w-4")} ${esc(P.location)} · ${esc(P.relocation)}</p>
            </div>
          </div>
          <h1 class="mt-8 text-5xl font-bold tracking-tight md:text-6xl">${esc(P.name)}</h1>
          <ul class="mt-5 flex flex-wrap gap-2" aria-label="Roles">
            ${P.roles.map((r) => `<li class="rounded-md border border-accent/30 bg-accent-soft px-2.5 py-1 font-mono text-xs font-medium text-accent-ink">${esc(r)}</li>`).join("")}
          </ul>
          <p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink2">${esc(P.summary)}</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a href="#" data-resume class="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-ink">${icon("file-down")} Download resume (PDF)</a>
            <a href="#contact" class="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg border border-line bg-card px-5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink2">${icon("mail")} Contact</a>
            <a href="${esc(P.contact.linkedin)}" target="_blank" rel="noopener" class="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg border border-line bg-card px-5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink2">${icon("linkedin")} LinkedIn</a>
          </div>
          <dl class="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-line pt-6">
            <div><dt class="font-mono text-xs uppercase tracking-wider text-muted">Experience</dt><dd class="num mt-1 text-2xl font-semibold">${P.yearsExperience}+ yrs</dd></div>
            <div><dt class="font-mono text-xs uppercase tracking-wider text-muted">LLM systems</dt><dd class="num mt-1 text-2xl font-semibold">2 in prod</dd></div>
            <div><dt class="font-mono text-xs uppercase tracking-wider text-muted">Largest team</dt><dd class="num mt-1 text-2xl font-semibold">8 people</dd></div>
          </dl>
        </div>
        <div class="min-w-0">${jsonCard()}</div>
      </div>`;
  }

  function renderRoles() {
    const cards = P.roleEvidence.map((r) => `
      <article class="flex flex-col rounded-xl border border-line bg-card p-6 transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(9,9,11,0.06)]">
        <div class="flex items-center gap-3">
          <span class="grid h-10 w-10 place-items-center rounded-lg bg-accent-soft text-accent">${icon(r.icon, "h-5 w-5")}</span>
          <p class="font-mono text-xs font-medium uppercase tracking-wider text-accent-ink">${esc(r.role)}</p>
        </div>
        <h3 class="mt-4 text-xl font-semibold tracking-tight">${esc(r.title)}</h3>
        <ul class="mt-4 space-y-3 text-[15px] leading-relaxed text-ink2">
          ${r.points.map((p) => `<li class="flex gap-2.5">${icon("check", "mt-1 h-4 w-4 shrink-0 text-accent")}<span>${esc(p)}</span></li>`).join("")}
        </ul>
        <div class="mt-auto flex flex-wrap gap-1.5 border-t border-dashed border-line pt-4 mt-6">
          ${r.stack.map((s) => `<span class="rounded bg-soft px-2 py-0.5 font-mono text-xs text-ink2">${esc(s)}</span>`).join("")}
        </div>
      </article>`).join("");
    $("#roles").innerHTML = shell("roles", "What I bring to each", "The same eight years, read through each job description.",
      `<div class="grid gap-5 lg:grid-cols-3">${cards}</div>`);
  }

  function renderImpact() {
    const rows = P.impact.map((r) => `
      <tr class="border-t border-line">
        <td class="px-5 py-3.5 font-medium">${esc(r.metric)}</td>
        <td class="px-5 py-3.5 text-sm text-muted">${esc(r.org)}</td>
        <td class="num px-5 py-3.5 text-right font-mono text-sm text-muted">${esc(r.before)}</td>
        <td class="num px-5 py-3.5 text-right font-mono text-sm font-semibold">${esc(r.after)}</td>
        <td class="num whitespace-nowrap px-5 py-3.5 text-right font-mono text-sm font-medium text-up">${esc(r.change)}</td>
      </tr>`).join("");
    $("#impact").innerHTML = shell("impact", "Before and after", "Measured changes from work I led or built.",
      `<div class="overflow-x-auto rounded-xl border border-line bg-card" role="region" aria-label="Impact figures" tabindex="0">
        <table class="w-full min-w-[640px] border-collapse text-left">
          <thead><tr class="font-mono text-[11px] uppercase tracking-wider text-muted">
            <th scope="col" class="px-5 py-3 font-medium">Metric</th><th scope="col" class="px-5 py-3 font-medium">Where</th>
            <th scope="col" class="px-5 py-3 text-right font-medium">Before</th><th scope="col" class="px-5 py-3 text-right font-medium">After</th><th scope="col" class="px-5 py-3 text-right font-medium">Change</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`);
  }

  function renderWork() {
    const card = (c) => `
      <article class="${c.featured ? "md:col-span-2" : ""} flex flex-col gap-3 rounded-xl border border-line bg-card p-6">
        <p class="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted"><span class="text-accent-ink">${esc(c.id)}</span><span>${esc(c.org)}</span><span>${esc(c.year)}</span><span>${esc(c.tag)}</span></p>
        <h3 class="text-xl font-semibold tracking-tight">${esc(c.title)}</h3>
        <p class="text-[15px] leading-relaxed text-ink2">${esc(c.body)}</p>
        ${c.flow ? `<ol class="flex flex-wrap items-center gap-2 font-mono text-xs" aria-label="Pipeline">${c.flow.map((s, i) => `<li class="flex items-center gap-2">${i ? icon("arrow-right", "h-3.5 w-3.5 text-muted") : ""}<span class="rounded-md border border-line bg-soft px-2 py-1">${esc(s)}</span></li>`).join("")}</ol>` : ""}
        <p class="mt-auto pt-2 text-2xl font-semibold tracking-tight text-up">${esc(c.result)}</p>
        ${c.detail ? `<p class="font-mono text-xs text-muted">${esc(c.detail)}</p>` : ""}
      </article>`;
    $("#work").innerHTML = shell("selected work", "Case files", "Problem, what I built, and what changed.",
      `<div class="grid gap-5 md:grid-cols-2">${P.cases.map(card).join("")}</div>`);
  }

  function renderExperience() {
    const items = P.experience.map((j) => `
      <li class="grid gap-2 border-t border-line py-6 first:border-t-0 first:pt-0 md:grid-cols-[200px_minmax(0,1fr)] md:gap-8">
        <p class="num font-mono text-sm text-muted">${esc(j.when)}</p>
        <div class="min-w-0">
          <h3 class="text-lg font-semibold">${esc(j.title)} <span class="font-normal text-muted">· ${esc(j.org)}</span></h3>
          <p class="text-sm text-muted">${esc(j.meta)}</p>
          <ul class="mt-3 list-disc space-y-1.5 pl-5 text-[15px] text-ink2 marker:text-line">${j.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        </div>
      </li>`).join("");
    $("#experience").innerHTML = shell("experience", "Where I've worked", "", `<ol class="rounded-xl border border-line bg-card p-6 md:p-8">${items}</ol>`);
  }

  function renderSkills() {
    const groups = P.skills.map((g) => `
      <div class="rounded-xl border border-line bg-card p-5">
        <h3 class="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-ink2">${icon(g.icon, "h-4 w-4 text-accent")} ${esc(g.group)}</h3>
        <ul class="mt-4 flex flex-wrap gap-1.5">${g.items.map(([name, core]) => `<li class="rounded-md border px-2.5 py-1 text-sm ${core ? "border-accent/30 bg-accent-soft text-accent-ink" : "border-line bg-card text-ink2"}">${esc(name)}</li>`).join("")}</ul>
      </div>`).join("");
    const langs = `
      <div class="rounded-xl border border-line bg-card p-5">
        <h3 class="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-ink2">${icon("languages", "h-4 w-4 text-accent")} Languages</h3>
        <dl class="mt-4 space-y-3">${P.languages.map((l) => `<div class="flex items-center justify-between gap-3"><dt class="font-medium">${esc(l.name)}</dt><dd class="rounded-md bg-soft px-2 py-0.5 font-mono text-xs text-ink2">${esc(l.level)}</dd></div>`).join("")}</dl>
      </div>
      <div class="rounded-xl border border-line bg-card p-5">
        <h3 class="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-ink2">${icon("graduation-cap", "h-4 w-4 text-accent")} Education</h3>
        <p class="mt-4 font-medium">${esc(P.education.degree)}</p>
        <p class="text-sm text-muted">${esc(P.education.school)}</p>
        <p class="num mt-1 font-mono text-xs text-muted">${esc(P.education.years)}</p>
      </div>`;
    $("#skills").innerHTML = shell("toolkit", "Skills, languages & education", "Highlighted skills are ones I've used in production.",
      `<div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">${groups}${langs}</div>`);
  }

  function renderBuilding() {
    $("#building").innerHTML = shell("in progress", "Building in public", "Open-source work I'm adding to GitHub to show the engineering side end to end.",
      `<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">${P.building.map((b) => `
        <div class="rounded-xl border border-dashed border-line bg-card p-5">
          <p class="flex items-center gap-2 font-mono text-sm font-medium">${icon("git-branch", "h-4 w-4 text-muted")}${esc(b.repo)}</p>
          <p class="mt-2 text-sm leading-relaxed text-ink2">${esc(b.desc)}</p>
        </div>`).join("")}</div>`);
  }

  function renderContact() {
    const row = (label, value, extra = "") => `
      <div class="flex flex-wrap items-center gap-3 border-t border-line py-4 first:border-t-0">
        <span class="w-24 font-mono text-xs uppercase tracking-wider text-muted">${label}</span>
        <span class="min-w-0 flex-1 break-words">${value}</span>${extra}</div>`;
    $("#contact").innerHTML = shell("contact", "Hiring for analytics, data science or ML?", "",
      `<div class="grid gap-8 md:grid-cols-2">
        <div>
          <p class="max-w-md text-lg text-ink2">I'm looking for senior analytics, data science and ML engineering roles, especially in fintech and payments in the UK.</p>
          <a href="#" data-resume class="mt-6 inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-lg bg-accent px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-ink">${icon("file-down")} Download resume (PDF)</a>
        </div>
        <div class="rounded-xl border border-line bg-card px-5">
          ${row("Email", `<span id="email" class="select-all font-mono text-sm">${esc(P.contact.email)}</span>`,
            `<button type="button" data-copy="email" class="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-md border border-line px-3 text-xs font-medium transition-colors duration-200 hover:border-ink2">${icon("copy", "h-3.5 w-3.5")}<span>Copy</span></button>`)}
          ${row("LinkedIn", `<a class="font-mono text-sm text-accent underline-offset-4 hover:underline" href="${esc(P.contact.linkedin)}" target="_blank" rel="noopener">${esc(P.contact.linkedinLabel)}</a>`)}
          ${row("Location", `<span class="text-sm">${esc(P.location)} · ${esc(P.relocation)}</span>`)}
          ${row("Languages", `<span class="text-sm">${P.languages.map((l) => `${esc(l.name)} (${esc(l.level)})`).join(" · ")}</span>`)}
        </div>
      </div>`);
  }

  // ---------- behaviour ----------
  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.style.opacity = "1";
    clearTimeout(t._h); t._h = setTimeout(() => (t.style.opacity = "0"), 2200);
  }

  // Resume download. Inside claude.ai the page uses the "downloads" capability;
  // anywhere else (e.g. GitHub Pages) it is a normal <a download> link.
  let downloads = null;
  function wireResume() {
    document.querySelectorAll("[data-resume]").forEach((a) => {
      a.href = P.resume.file;
      a.setAttribute("download", P.resume.filename);
      a.addEventListener("click", async (e) => {
        if (!downloads) return; // plain link behaviour
        e.preventDefault();
        try {
          const blob = await (await fetch(P.resume.file)).blob();
          await downloads.save({ filename: P.resume.filename, data: blob });
        } catch (err) {
          if (err && err.code === "declined") return;
          toast("Download isn't available here. Use the LinkedIn link instead.");
          console.warn("resume download failed", err);
        }
      });
    });
    if (window.claude && typeof window.claude.use === "function") {
      window.claude.use("downloads").then((d) => { downloads = d; }).catch(() => {});
    }
  }

  function wireCopy() {
    document.querySelectorAll("[data-copy]").forEach((b) => b.addEventListener("click", () => {
      const el = document.getElementById(b.dataset.copy);
      const label = b.querySelector("span");
      const done = (m) => { label.textContent = m; setTimeout(() => (label.textContent = "Copy"), 1800); };
      const fallback = () => { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); done("Selected"); };
      try { navigator.clipboard.writeText(el.textContent.trim()).then(() => done("Copied"), fallback); } catch (_) { fallback(); }
    }));
  }

  // ---------- boot ----------
  renderNav(); renderHero(); renderRoles(); renderImpact(); renderWork();
  renderExperience(); renderSkills(); renderBuilding(); renderContact();
  if (window.lucide) window.lucide.createIcons();
  wireResume(); wireCopy();
})();
