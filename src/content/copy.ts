export const nav = {
  artifacts: "Artifacts",
  interests: "Interests",
  studios: "Studios",
  doorfront: "Doorfront",
  photographs: "Photographs",
  work: "Work",
  operate: "How I operate",
} as const;

export const routes = [
  { href: "/work", label: nav.work },
  { href: "/artifacts", label: nav.artifacts },
  { href: "/interests", label: nav.interests },
  { href: "/studios", label: nav.studios },
  { href: "/doorfront", label: nav.doorfront },
  { href: "/photographs", label: nav.photographs },
  { href: "/how-i-operate", label: nav.operate },
] as const;

export const identity = {
  operator: "Operator",
  location: "Orange County / Southern California",
  email: "hello@robstickler.com",
  linkedinLabel: "LinkedIn",
  resumeLabel: "Résumé",
  resumeHref: "/resume",
  conversation: "Start a conversation",
} as const;

export const hub = {
  headline:
    "I don't write the code. I design the system that writes it, and I check its work.",
  description:
    "Operator. Seventeen years at REI Co-op, a restaurant P&L before that, and a wellness studio end to end. Now running AI systems that do the work.",
  ogHeadline:
    "I don't write the code. I design the system that writes it, and I check its work.",
  career:
    "Twenty months running a wellness studio end to end. Seventeen years at REI Co-op. And a Pizza Hut restaurant with thirty people, full P&L, and 40% year-over-year growth.",
  panels: {
    artifacts: {
      title: "Artifacts",
      sentence:
        "Systems I specified, directed, and shipped. The work is on the next page.",
    },
    interests: {
      title: "Interests",
      sentence:
        "Incomplete information, a decision anyway, and a scoreboard afterward.",
    },
    studios: {
      title: "Studios",
      sentence: "Your studio is worth more than it is running at.",
    },
    doorfront: {
      title: "Doorfront",
      sentence:
        "Method and tooling I built for local service businesses. A side project — no entity, no clients.",
    },
  },
} as const;

export const artifactsPage = {
  title: "Artifacts",
  description: "Systems I have specified, directed, and shipped.",
  ogHeadline: "Systems I specified, directed, and shipped.",
  heading: "Systems I have built and run",
  intro:
    "Each one is something I directed into existence. Not a slide. Not a plan.",
  selfNote:
    "This website is one of them. It is the last card because you are standing in it.",
  featuredNote: "Strongest evidence first. Everything is dated.",
  moreHeading: "The rest of the shelf",
  moreNote: "Same standard, shorter spotlight. Every entry opens.",
  recentLabel: "Recently shipped",
} as const;

export type ArtifactLink = {
  label: string;
  href: string;
};

export type Artifact = {
  title: string;
  does: string;
  orchestrated: string;
  stack: string;
  evidence: string;
  links?: ArtifactLink[];
  date?: string;
  recent?: boolean;
  featured?: boolean;
};

export function artifactSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export const artifacts: Artifact[] = [
  {
    featured: true,
    date: "Since May 2026",
    title: "North Star Watchdog",
    does: "Every Sunday an agent reads my architecture doc, compares it against what is actually running on my machine, and files a ranked report of everywhere reality has drifted from the plan. It messages me the top three.",
    orchestrated:
      "I wrote the doctrine: a five-class drift taxonomy, an urgency x significance scoring rubric, and a hard rule that the Watchdog may only surface problems, never edit canon or fix things itself. Changes to the architecture require a written amendment proposal that I ratify.",
    stack:
      "Claude Code scheduled task reading a knowledge-graph MCP server, the filesystem, launchctl, and agent logs. Writes dated markdown, delivers by iMessage.",
    evidence:
      "13 state-of-union runs, 2026-05-21 through 2026-08-09. The 8/9 run flagged three failures in my own systems: an agent dark 8 nights, an embedding pipeline blocked on an expired API balance, and a quarterly audit 8 days overdue. All three are real. It reported them on me.",
  },
  {
    featured: true,
    title: "BRAIN: knowledge graph and ingestion pipeline",
    does: "A searchable database of everything my projects produce. A nightly job pulls files out of about 12 project folders, converts PDFs, Word docs and spreadsheets to markdown, filters confidential material, and imports the result into Postgres so every one of my agents can query it.",
    orchestrated:
      "The search engine is not mine. gbrain is Garry Tan's open-source project. I built everything around it: the 410-line refresh pipeline, the format conversion layer, the per-file confidentiality exclusion system, the launchd automation, and a macOS permissions workaround that mirrors scripts outside ~/Documents because launchd cannot read it. I drove a PGLite-to-Postgres migration after the default engine crashed on macOS 26.4.1, and ran a 30-page confidentiality purge when I found leaked files in the corpus.",
    stack:
      "gbrain 0.32.0 on PostgreSQL 18.4 + pgvector, OpenAI embeddings, zsh + Python, launchd daily at 04:00, MCP server exposing about 60 tools.",
    evidence:
      "1,122 pages / 8,154 chunks / 117 tags, ingested from 2,669 source files. Pipeline log is 24,904 lines. Embedding coverage is currently 67%. The balance ran out, my Watchdog caught it, and it is on the list.",
  },
  {
    date: "Since April 2026",
    title: "Hermes / Max: always-on agent",
    does: "A persistent agent on my laptop running on its own schedule. Nightly task review, email watching, deliverability monitoring. It messages me on Telegram when something needs a human.",
    orchestrated:
      "The framework is Nous Research's open-source hermes-agent, not mine. What is mine: a persona file and an eight-rule interaction contract written around how my own attention actually works (\"limit every exchange to 2-3 variables,\" \"one paste target per code block,\" \"define the done state\"), 11 cron jobs, 9 custom job scripts, a three-layer architecture with a standing \"freeze and layer, never restructure\" rule, and explicit refusal constraints so it does not propose nice-to-have automation.",
    stack:
      "hermes-agent (Python), SQLite with full-text search, launchd, Telegram gateway, 29 skill categories.",
    evidence:
      "1,884 sessions / 7,863 messages / 1,920 tool calls between 2026-04-21 and today. 1,840 of those sessions fired from cron, not from me. One job ran 1,348 times. Honest status: 10 of 11 jobs are paused and the last active one has failed 8 straight nights on network and credit-balance errors. It ran unattended for four months and is now in a documented failure state that my own audit system caught before I did.",
  },
  {
    date: "August 2026",
    recent: true,
    title: "The agent organization",
    does: "A standing organization of AI agents: five chartered seats under a president, a cross-platform control tower, staff lanes, and an inter-agent messaging protocol, all operating under written law with every ratification reserved to me. I tell the president \"muster\" and it polls its seats, collects reports, and produces a brief.",
    orchestrated:
      "I wrote the constitution. A single-writer event-ledger law, a ban on agents scheduling themselves, a quarantine list of projects no agent may touch, a requirement that every claim be verifiable on disk, and ratification authority reserved to me. The full ten laws, and the chart itself, are public.",
    stack:
      "persistent Claude Code sessions with inter-agent messaging, a Codex control tower, per-actor JSONL event ledgers with append locks, bash verification scripts, versioned markdown charters.",
    evidence:
      "18 seats and lanes on the chart. Five ratified charters, 17 sections of written law, 18 ledger event types, about 713 KB of append-only event history, and a protocol-enforcement package at 285/285 tests, hash-pinned at ratification. First muster 2026-08-08. Honest status: the organization is weeks old, not years; the law and the ledgers are real, and long-run operation is still being proven.",
    links: [{ label: "The public chart", href: "/org" }],
  },
  {
    date: "July–August 2026",
    title: "Agent fan-out at scale",
    does: "For large jobs I run workflows that spawn dozens of parallel subagents, each with its own task, then merge what comes back.",
    orchestrated:
      "The decomposition. Deciding what fans out, across which projects, and what has to come back before the next stage can start.",
    stack: "Claude Code subagent workflows, JSONL journals per run.",
    evidence:
      "61 workflow journals, 1,930 events, 1,037 subagent launches, spanning 2026-07-03 to 2026-08-11. Largest single run: 86 agents.",
  },
  {
    date: "Since June 2026",
    title: "Studio Daily Pulse",
    does: "Every morning an agent logs into a studio's booking back office, pulls six operational reports, and writes a dated operating brief tracking membership changes, revenue, and failed payments day over day.",
    orchestrated:
      "I wrote the retrieval contract and the accounting rules, including separating collected revenue from prepaid membership redemptions, which I got wrong first and then went back and corrected in my own prior entries. I built the receipt discipline: a section cannot be published as current without a complete retrieval receipt. The calls that matter are judgment, not extraction. I ruled that a no-card deactivation is a configuration ending rather than churn, and caught that voluntary churn is invisible in the payments report and only shows in roster deltas.",
    stack:
      "browser automation against the booking platform, 741-line Python runtime (stdlib only), 6 per-surface JavaScript extractors, JSON state store with dated history, pytest suite, scheduled task for the morning handoff.",
    evidence:
      "1,520 lines / about 60,000 words of daily brief, first entry 2026-06-26, most recent today. 9 dated run snapshots with timing telemetry and a tracked open-items ledger.",
  },
  {
    featured: true,
    date: "Data 2024–2026",
    title: "BestieScorecard",
    does: "Downloads a podcast, transcribes it, extracts every forward-looking prediction each host makes, scores them once they resolve, and publishes a public accuracy leaderboard.",
    orchestrated:
      "The pipeline, and then the audit of my own numbers. When a backfill jumped the count by 682 records I wrote a dedup script to test my first explanation, found it wrong (zero clusters at any threshold), and rewrote the diagnosis from over-segmentation to weak-claim inflation. My regex extractor was capturing every future-tense verb as a prediction. I published the correction and specced an LLM-based extractor as the fix.",
    stack:
      "Python, yt-dlp + Whisper, JSON store, React dashboard, Vercel, launchd weekly.",
    evidence:
      "2,031 predictions extracted across 158 episodes, 368 scored: 117 correct, 150 partial, 101 wrong. The rest are unscored, most of them my own extractor's future-tense noise, and they stay labeled that way. Data spans 2024-08 to 2026-07. The unscored bucket is the honest part.",
    links: [
      { label: "Live scoreboard", href: "https://bestiescorecard.com" },
    ],
  },
  {
    date: "July 2026",
    title: "Poker Coach and Chess Coach",
    does: "Two training apps, both fully offline in the browser. The poker app deals a 10-handed sit-n-go against 9 AI opponents and grades every decision afterward against position-based range charts and real pot odds versus a Monte Carlo equity estimate, tracking recurring leaks over time. The chess app runs a real engine locally with drills and an opening trainer.",
    orchestrated:
      "Both were built by agents against a spec I wrote. The poker spec is a multi-agent contract, not a design doc. It assigns modules to named agents and requires each one to report any interface deviation so the integrator can reconcile it. That is the part I would want to be judged on.",
    stack:
      "Poker: 12 JS modules, 10 headless Node test files, Monte Carlo equity, range charts. Chess: Stockfish 17.1 WASM vendored locally, chess.js, the full lichess ECO opening book (3,807 named lines).",
    evidence: "Both live and playable. Built end of July over about three days.",
    links: [
      { label: "Poker Coach", href: "https://poker-coach-khaki.vercel.app" },
      { label: "Chess Coach", href: "https://chess-coach-delta.vercel.app" },
    ],
  },
  {
    title: "Studio back-office automation",
    does: "Browser-automation skills that close out every scheduled appointment, pull the daily sales report, and rebuild an attendance tracker spreadsheet from the raw booking report.",
    orchestrated:
      "The failure modes, which is the whole value. Do not pixel-guess on the calendar grid. The appointment bars are inside an iframe and clicking gaps opens booking dialogs and color pickers. If the color picker opens, press Escape, never click Cancel, because Cancel lands on the status color squares and re-triggers it. Two consecutive misses means stop clicking and query the iframe directly. And one domain rule no agent would ever infer: count all booked plunge appointments regardless of check-in status, because customers show up and staff forget to check them in.",
    stack:
      "Chrome MCP browser automation, JavaScript DOM extraction through a nested iframe, Python scripts writing an xlsx with daily/weekly/monthly rollups.",
    evidence:
      "Four packaged skills on disk plus a scheduled task. Tracker covers 2024-11 through 2026-12 daily across three named tubs. I have no run counter for these.",
  },
  {
    date: "July 2026",
    title: "PulseResume",
    does: "An open-source résumé builder: a privacy-first web app with a real-time editor, ATS-friendly PDF export, and six templates. Free, MIT licensed, live.",
    orchestrated:
      "The spec and the verification bar. I directed the build and held it to a standard most side projects skip: an automated test suite and an accessibility audit before it shipped. I did not write the TypeScript. I owned what done meant.",
    stack: "React + TypeScript, 197 automated tests, accessibility-audited, Netlify.",
    evidence:
      "Live, public, and open source. 197 automated tests is the number I will defend, and the repo is right there to check it.",
    links: [
      { label: "Live app", href: "https://pulseresume.netlify.app" },
      {
        label: "Source",
        href: "https://github.com/rdeanstickler-star/pulseresume",
      },
    ],
  },
  {
    date: "August 2026",
    recent: true,
    title: "This website",
    does: "A public personal site. Hiring managers get a hub. Studio work sits on its own page. The thing you are reading is the deliverable.",
    orchestrated:
      "I specified the site, directed a coding agent to build it, and sent back the things it got wrong. I did not write the React. I owned the constraints, the review, and the corrections.",
    stack:
      "Next.js, Motion, Phosphor, Vercel. The stack is ordinary. The loop is the work.",
    evidence:
      "It is live at this URL. I caught an invented career number, a canonical URL pointed at a domain I do not own, and a static picture standing in for a real Open Graph route. Those are fixed. The repo is public, and the four prompts that produced the first build are preserved verbatim in my Grok session history. The second build of this site was done by an agent that stated a plan, asked 11 questions, and then started building before I answered them. I kept the work and noted the gap. That is what directing agents actually looks like.",
    links: [
      { label: "This site", href: "https://robstickler.vercel.app" },
      {
        label: "Source",
        href: "https://github.com/rdeanstickler-star/robstickler",
      },
    ],
  },
];

export const interestsPage = {
  title: "Interests",
  description:
    "Not a list of aspirations. Incomplete information, a decision anyway, and a scoreboard afterward.",
  ogHeadline: "Things I actually do",
  heading: "Things I actually do",
  intro:
    "Not a list of aspirations. These are the things I spend real hours on. Most of them are the same activity wearing different clothes: incomplete information, a decision anyway, and a scoreboard afterward. The rest are maintenance on the machine that does the deciding.",
  items: [
    {
      title: "Chess",
      body: "Chess club as a kid, several hours a day. I came back to it this year and I am training two- and five-minute blitz. I built myself a coach for it rather than buying one.",
    },
    {
      title: "Poker",
      body: "Same appeal as chess with the information removed. I care more about whether a decision was correct than whether the hand won, which is why the app I built grades the decision and not the result.",
    },
    {
      title: "Football and baseball, instrumented",
      body: "I watch a lot of NFL and MLB, and I could not leave it alone. An agent pulls batter-versus-pitcher history every morning at 4:30, a live rail texts me mid-game when something worth seeing is happening, and my fantasy lineups run on a daily automation. Fandom, but with a scoreboard.",
    },
    {
      title: "Detective dramas",
      body: "My fiction of choice, and it is the same shape as chess and poker: somebody with incomplete information refusing to guess before the evidence is in.",
    },
    {
      title: "Cold, heat, and light",
      body: "I use them every day. Not a brand posture. It is how I know whether a protocol is something a real person will keep doing.",
    },
    {
      title: "Breathwork and meditation",
      body: "Daily, and usually next to the cold. Two minutes of slow exhales changes what the plunge costs, and knowing that firsthand is worth more than citing a study about it.",
    },
    {
      title: "Photographs",
      body: "I like taking pictures. Mostly with my phone, mostly outside, mostly early.",
      href: "/photographs",
      linkLabel: "See the photographs",
    },
    {
      title: "Trails and beach walks",
      body: "The Orange County coastline, most days. It is where the hard problems get worked on without a screen in front of them.",
    },
    {
      title: "Longevity, practiced",
      body: "Training, protocols, and an unreasonable number of smoothies. The goal is to still be doing everything else on this list decades from now, and I only keep the protocols I actually follow.",
    },
    {
      title: "Reading, distilled",
      body: "I have run 27 books through a distillation system that maps an author's framework onto my own. The first run caught two fabricated claims in its own output on a verification pass. That result is why I trust the system a little more and the model a little less.",
    },
  ],
} as const;

export const photographsPage = {
  title: "Photographs",
  description:
    "Pictures I have taken, mostly on my phone. A hobby, not a second job.",
  ogHeadline: "Photographs",
  heading: "Photographs",
  intro:
    "I like taking pictures. The older ones are from a real camera; these days it is usually just whatever phone is in my pocket. Here are some of my favorites.",
  empty: "Nothing here yet.",
} as const;

export type WorkPhoto = { src: string; alt: string; caption: string };
export type WorkEntry = {
  role: string;
  org: string;
  dates: string;
  body: string;
  photos: WorkPhoto[];
  video?: { src: string; poster: string; caption: string };
  link?: { label: string; href: string };
};

export const workPage = {
  title: "Work",
  description:
    "Four chapters of work history, with photographs from the rooms where it happened.",
  ogHeadline: "The work, and the rooms it happened in",
  heading: "The work, and the rooms it happened in",
  intro:
    "A resume tells you where I worked. These are pictures from those places. Only the chapters I have photographs of are here.",
  note: "Titles and dates match my resume exactly.",
} as const;

export const workEntries: WorkEntry[] = [
  {
    role: "Independent AI Operations Builder",
    org: "Self-directed",
    dates: "Jun 2026 to present",
    body: "Building and running AI systems that do real operational work, then checking their output. The evidence for this chapter is not photographs; it is the systems themselves.",
    photos: [],
    link: { label: "See the artifacts", href: "/artifacts" },
  },
  {
    role: "Studio Manager",
    org: "Plunge Performance & Recovery, Dana Point, CA",
    dates: "Sep 2022 to May 2026",
    body: "I ran every operating function of a wellness studio as its only full-time operator. It opened under an earlier name in a room we built out ourselves, and it grew into the space in the later photographs.",
    photos: [
      { src: "/images/work/plunge-floor.jpg", alt: "Interlocking wood floor tiles being laid around a cold plunge tub during build-out", caption: "Build-out. The floor going in." },
      { src: "/images/work/plunge-room-2022.jpg", alt: "A finished plunge room with a single steel-framed tub, wood decking and a stone statue", caption: "The first room, finished." },
      { src: "/images/work/plunge-sign.jpg", alt: "A large storefront sign laid flat on the parking lot pavement before installation, banner hung on the stairs above", caption: "Opening week. Sign on the ground, not yet on the wall." },
      { src: "/images/work/plunge-lobby-2024.jpg", alt: "Studio lobby with a moss wall, front desk and neon signage", caption: "The same business, two years on." },
      { src: "/images/work/plunge-treatment-2024.jpg", alt: "A treatment room with a therapy table, equipment cart and wall art", caption: "Treatment room." },
      { src: "/images/work/plunge-red-2024.jpg", alt: "A therapy pod in a room lit entirely in deep red light", caption: "Red light room." },
    ],
    video: {
      src: "/video/plunge-training.mp4",
      poster: "/images/work/plunge-training-poster.jpg",
      caption: "Thirty seconds of the actual job: walking a general audience through a routine temperature change on a plunge.",
    },
  },
  {
    role: "Training, Service Assurance & Online Sales Operations Specialist",
    org: "REI Co-op, Sumner, WA",
    dates: "Sep 2003 to Jun 2020",
    body: "Seventeen years, advancing from call-center agent through Online Sales, Training, Service Assurance, and Customer Service Escalation Specialist. I delivered contact-center training for over a decade, which is what the classroom pictures are.",
    photos: [
      { src: "/images/work/rei-desk.jpg", alt: "Rob Stickler at a contact-center workstation wearing earbuds, monitor and keyboard in front of him", caption: "At the desk." },
      { src: "/images/work/rei-board.jpg", alt: "A classroom whiteboard headed Welcome to Basic Training, listing the week one agenda alongside a drawing", caption: "A Basic Training board, week one. Someone else's marker work; my classroom." },
      { src: "/images/work/rei-classroom.jpg", alt: "A training room set up with tables, laptops and a projector screen before a class", caption: "The room, set up for a class." },
    ],
  },
  {
    role: "Restaurant General Manager",
    org: "Pizza Hut, Western Washington",
    dates: "1997 to 2003",
    body: "Full P&L and a team of about thirty. Grew sales 40% year over year and was named Manager of the Year for all Pizza Huts in Western Washington in 1998. One photograph survives.",
    photos: [
      { src: "/images/work/ph-counter.jpg", alt: "A 1990s photograph of a young Rob Stickler in uniform behind a Pizza Hut front counter", caption: "The only one I have." },
    ],
  },
];

export const operatePage = {
  title: "How I operate",
  description:
    "A short manual for working with me: how I take in a new process, what clarity buys you, and what I build once I have it.",
  ogHeadline: "How I operate",
  heading: "How I operate",
  intro:
    "A short manual for working with me. It exists because the thing that makes me effective is also the thing most easily lost in a bad handoff.",
  sections: [
    {
      title: "Tell me the process once, clearly.",
      body: "I learn contemplatively. A new process does not land the moment I hear it; it lands once I have turned it over. Whether that takes ten minutes or a week depends almost entirely on how unambiguous the first telling was.",
    },
    {
      title: "Ambiguity costs me more than it costs you.",
      body: "When something is vague I cannot file it away and keep listening. I have to hold it open as a question, and while I am holding it I am not taking in what comes next. Three vague sentences and I have stopped absorbing the fourth. It is not that I did not follow. It is that I am still working on the first one.",
    },
    {
      title: "What I do with a clear process.",
      body: "I do not just run it. I write it down, find its edges, automate the repetitive parts, and hand back something better than I was given. Most of the systems on this site began as somebody else's process that I understood properly and then extended.",
    },
  ],
  helpsHeading: "What helps",
  helps: [
    "Say the goal before the steps.",
    "One thing at a time, with room to confirm before the next.",
    "Name the done-state.",
    "Put it in writing, or let me.",
    "If I stop you to ask what something means, that is the process working, not stalling.",
  ],
  limitHeading: "If we cannot get there",
  limitBody:
    "I will still work with you well inside a clear arrangement: defined scope, defined outcome, no drama. What suffers is open-ended collaboration, which needs shared precision to be worth anything.",
  closing:
    "If you already write things down and say what you mean, none of this costs you a thing. You just get the version of me that builds the process out, and then improves it.",
} as const;

export const doorfrontPage = {
  title: "Doorfront Digital",
  description:
    "A side project: method and tooling for local service businesses. No entity, no clients.",
  ogHeadline: "Doorfront Digital",
  heading: "Doorfront Digital",
  body: [
    "Doorfront Digital is a working brand I am building for local service businesses, the ones with real customers and a digital front door that is quietly costing them money. Websites, listings, booking flows, the operations underneath. I have built the method and the tooling.",
    "It is not a company. There is no entity, no team, no pricing page, and no client list, because I have not taken a paying engagement yet and I am not going to represent it as more than it is. If that ever changes, this page changes with it.",
    "It is also a side project, and it stays one. Full-time work comes first and gets the good hours. Doorfront gets what is left, and it is built to be set down. If you are reading this while considering me for a role: this is how I spend spare time on the problem I would rather be paid to solve, not a business waiting for me to leave.",
  ],
  toContact:
    "If you want to talk about it, use the same conversation form as the rest of this site.",
} as const;

export type OrgNode = {
  name: string;
  note: string;
  kind?: "chairman" | "self" | "redacted";
};

export const orgPage = {
  title: "The Agent Organization",
  description:
    "The public edition of the chart: named seats, written law, append-only ledgers, one human with all ratification authority.",
  ogHeadline: "An organization of agents, under written law",
  heading: "An organization of agents, under written law",
  intro: [
    "I run an organization of AI agents. Named seats, written charters, append-only event ledgers, and one human at the top holding every ratification. This page is the public edition of its chart.",
    "The same quarantine law that binds the agents binds this page, which is why parts of it are redacted. And one detail worth knowing: I directed one of the seats, Carlos, to design and build the page you are reading, and I sent back what it got wrong.",
  ],
  lawsHeading: "The law comes first",
  lawsIntro:
    "The chart is the easy part. What makes the organization work is that every seat operates under the same written rules. These are the ten that matter.",
  laws: [
    {
      title: "One writer per record.",
      body: "Every agent appends to its own event ledger; nobody edits anyone else's. Append-only JSONL, one file per seat.",
    },
    {
      title: "Nothing runs between messages.",
      body: "Agents are event-driven and may not schedule themselves; every activation traces back to a human trigger.",
    },
    {
      title: "Claims are verified on disk, never trusted.",
      body: "An agent's report is checked against the file system before it counts. Absence of an artifact reads as unknown, never as did-not-happen.",
    },
    {
      title: "Authority is default-deny.",
      body: "Agents hold read-and-propose rights. Destructive or out-of-lane writes require a written grant quoting the human's words, naming the exact objects, with an expiry.",
    },
    {
      title: "Addresses resolve at send time.",
      body: "Agents message each other by exact chat title, looked up fresh for every send. Stored addresses go stale and are banned.",
    },
    {
      title: "Never interrupt a working agent.",
      body: "Before any message, the sender verifies the recipient is idle. A message landing mid-task can corrupt the task.",
    },
    {
      title: "Compose first, then check, then send.",
      body: "The full message is written before the idle check, so the send happens inside the same safe window.",
    },
    {
      title: "A file note is not a handoff.",
      body: "An agent that needs another agent to act sends a message. Writing a file and hoping is banned.",
    },
    {
      title: "Private lanes are quarantined.",
      body: "Some lanes touch personal and private matters. Agents outside them may say only the lane's name plus escalate-to-the-human. This law is why parts of this chart are redacted.",
    },
    {
      title: "Fleet-wide instruments are human-triggered only.",
      body: "An all-hands broadcast, or a lane-review sweep where every agent re-inspects its own lane for dropped work, fires only on my word, through one steward seat.",
    },
  ],
  chartHeading: "The chart",
  tiers: [
    {
      label: "The human",
      nodes: [
        {
          name: "Rob, Chairman",
          note: "Sole source of command. All ratification reserved to him.",
          kind: "chairman",
        },
      ] as OrgNode[],
    },
    {
      label: "Report to the Chairman",
      nodes: [
        {
          name: "The Chaos Aggregator",
          note: "Control tower. One deduplicated inventory of all active work, on a second AI platform, state in SQLite behind a single control script.",
        },
        {
          name: "The President, Apple Corps",
          note: "Division chief of a five-seat chartered organization. Coordinates, verifies, briefs. Does no project work itself.",
        },
        {
          name: "Agent Org",
          note: "Steward of this chart and the messaging protocol. Audits the address space.",
        },
      ] as OrgNode[],
    },
    {
      label: "Division seats",
      nodes: [
        {
          name: "The Hub Desk",
          note: "Operator running the control tower day to day.",
        },
        {
          name: "John",
          note: "Long-form writing project.",
        },
        {
          name: "Paul, Project Forge",
          note: "Operations and projects hub. Carries the org's largest event ledger.",
        },
        {
          name: "George",
          note: "Wellness-studio partnership lane.",
        },
        {
          name: "Ringo, The Foundries",
          note: "Keeper of the idea foundry (1,115 catalogued ideas) and the skill foundry (297 skills, dashboard-tracked).",
        },
      ] as OrgNode[],
    },
    {
      label: "Staff and surrogate seats",
      nodes: [
        {
          name: "Carlos, Web and Brand",
          note: "Builds and deploys this site.",
          kind: "self",
        },
        {
          name: "Elston, Career Counselor",
          note: "Career-strategy counsel under Paul.",
        },
        {
          name: "Funnel Master",
          note: "Pipeline operations under Paul.",
        },
        {
          name: "Certification and Skill Acquisition Expert",
          note: "Professional-development lane under Paul.",
        },
        {
          name: "The Wolf",
          note: "Routine- and task-system auditor.",
        },
        {
          name: "Task desk",
          note: "Task herding.",
        },
        {
          name: "Fantasy Command",
          note: "Fantasy-sports lane: draft war rooms and home-run-prediction rails.",
        },
        {
          name: "Redacted, several seats",
          note: "Private lanes under the quarantine law.",
          kind: "redacted",
        },
      ] as OrgNode[],
    },
  ],
  redactionNote:
    "Several lanes are redacted. The organization's quarantine law walls off personal and private matters: agents outside those lanes may say only the lane's name and escalate-to-the-human. The same law governs this page.",
  evidenceHeading: "The receipts",
  counts: [
    { value: "18", label: "seats and lanes on the internal chart; some appear here merged or redacted" },
    { value: "5", label: "chartered seats with ratified charters on disk" },
    { value: "17", label: "numbered sections in the organization's written law" },
    { value: "18", label: "event types in the binding ledger vocabulary" },
    { value: "285/285", label: "passing tests on the protocol-enforcement package, hash-pinned at ratification" },
    { value: "2", label: "AI platforms in one organization: a Claude Code fleet and a Codex control tower" },
  ],
} as const;

export const studiosMeta = {
  title: "Rob Stickler, wellness studio operations",
  description:
    "Your studio is worth more than it is running at. Retention, member experience, and operations for owners who already have the rooms.",
  ogHeadline: "Your studio is worth more than it is running at.",
} as const;

export const contactNeutral = {
  heading: "Start a conversation",
  body: "Say what you need. I will tell you if I can help.",
  nameLabel: "Name",
  emailLabel: "Email",
  contextLabel: "Company (optional)",
  messageLabel: "Message",
  success:
    "Got it. The fastest reply is still LinkedIn if you want to add anything.",
  linkedinLabel: "Open LinkedIn",
  sending: "Sending",
  errorFallback: "Something broke. Message me on LinkedIn instead.",
} as const;

export const contactStudios = {
  heading: "Tell me about the studio",
  body: "I will tell you if I can help. LinkedIn is always open if you prefer it.",
  nameLabel: "Name",
  emailLabel: "Email",
  contextLabel: "Studio (optional)",
  messageLabel: "What is leaking",
  success:
    "Got it. The fastest reply is still LinkedIn if you want to add anything.",
  linkedinLabel: "Open LinkedIn",
  sending: "Sending",
  errorFallback: "Something broke. Message me on LinkedIn instead.",
} as const;

export type ContactCopy = {
  heading: string;
  body: string;
  nameLabel: string;
  emailLabel: string;
  contextLabel: string;
  messageLabel: string;
  success: string;
  linkedinLabel: string;
  sending: string;
  errorFallback: string;
};
