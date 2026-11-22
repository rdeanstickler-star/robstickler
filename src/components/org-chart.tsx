const box = {
  fill: "var(--bg)",
  stroke: "var(--line)",
} as const;

const name = {
  fontSize: 12,
  fontWeight: 600,
  fill: "var(--ink)",
} as const;

const sub = {
  fontSize: 9.5,
  fill: "var(--muted)",
} as const;

type Stripe = "seat" | "hub" | "staff";

const stripeColor: Record<Stripe, string> = {
  seat: "var(--accent)",
  hub: "var(--ink)",
  staff: "var(--muted)",
};

function Node({
  x,
  y,
  w = 150,
  h = 58,
  stripe,
  title,
  note,
  note2,
  dashed = false,
  centered = true,
  accentBorder = false,
  parked = false,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  stripe: Stripe;
  title: string;
  note: string;
  note2?: string;
  dashed?: boolean;
  centered?: boolean;
  accentBorder?: boolean;
  parked?: boolean;
}) {
  const tx = centered ? x + w / 2 : x + 14;
  const anchor = centered ? "middle" : "start";
  return (
    <g opacity={parked ? 0.5 : 1}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        fill={dashed ? "none" : box.fill}
        stroke={accentBorder ? "var(--accent)" : dashed ? "var(--muted)" : box.stroke}
        strokeWidth={accentBorder ? 1.4 : 1}
        strokeDasharray={dashed ? "5 3" : undefined}
      />
      {dashed ? null : (
        <rect
          x={x + 1}
          y={y + 1}
          width={4}
          height={h - 2}
          rx={2}
          fill={stripeColor[stripe]}
        />
      )}
      <text
        x={tx}
        y={y + 19}
        textAnchor={anchor}
        {...name}
        fill={dashed ? "var(--muted)" : name.fill}
      >
        {title}
      </text>
      <text x={tx} y={y + 34} textAnchor={anchor} {...sub}>
        {note}
      </text>
      {note2 ? (
        <text x={tx} y={y + 47} textAnchor={anchor} {...sub}>
          {note2}
        </text>
      ) : null}
    </g>
  );
}

export function OrgChart() {
  return (
    <div className="overflow-x-auto border border-line bg-bg-elev p-4 md:p-6">
      <svg
        role="img"
        aria-label="Organization chart, November 2026 edition. Rob, the Chairman, sits at the top as the sole source of command, and nine seats report to him directly. The Chaos Aggregator control tower, with the Hub Desk running it and redacted private lanes below. Noah, who owns the AI work backup, with the Hub Desk stepping in only on failures. The four Apple Corps seats, Paul, John, George and Ringo; the president seat between them and the Chairman retired in September 2026, and John, George and Ringo are parked. Under Paul: Marty's day-job division, a venture lane, Funnel Master, the Certification and Skill Expert, which is parked, and Carlos, which builds this site. Percy, Fantasy Sports; Gifford, Communication Mastery; and Agent Org, the chart and messaging-law steward. A box at the lower right lists the eight seats retired since the first edition. A text version of every seat follows this chart."
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1494 545"
        className="mx-auto block h-auto min-w-[1280px] max-w-none"
      >
        {/* Apple Corps band */}
        <rect
          x={340}
          y={100}
          width={652}
          height={100}
          rx={10}
          fill="var(--accent)"
          fillOpacity={0.05}
          stroke="var(--accent)"
          strokeOpacity={0.35}
        />
        <text x={984} y={192} textAnchor="end" fontSize={9.5} fill="var(--muted)">
          Apple Corps &middot; chartered seats &middot; the president seat retired Sep 2026
        </text>

        {/* connectors */}
        <g stroke="var(--muted)" strokeWidth={1.2} fill="none" opacity={0.8}>
          {/* Rob to bus, bus across, nine drops */}
          <path d="M666,64 V86 M99,86 H1395 M99,86 V110 M261,86 V110 M423,86 V110 M585,86 V110 M747,86 V110 M909,86 V110 M1071,86 V110 M1233,86 V110 M1395,86 V110" />
          {/* Aggregator to Hub Desk */}
          <path d="M99,168 V236" />
          {/* Paul spine */}
          <path d="M423,168 V212 H368 V504 M368,256 H380 M368,318 H380 M368,380 H380 M368,442 H380 M368,504 H380" />
        </g>
        <g
          stroke="var(--muted)"
          strokeWidth={1.2}
          fill="none"
          opacity={0.8}
          strokeDasharray="4 3"
        >
          {/* Hub Desk to redacted lanes */}
          <path d="M99,294 V322" />
          {/* Hub Desk oversight of the backup lane */}
          <path d="M174,265 H261 V168" />
        </g>
        <text x={267} y={222} fontSize={9.5} fill="var(--muted)">
          oversees failures
        </text>

        {/* Chairman */}
        <g>
          <rect
            x={566}
            y={14}
            width={200}
            height={50}
            rx={9}
            fill="var(--accent)"
            fillOpacity={0.12}
            stroke="var(--accent)"
            strokeWidth={1.4}
          />
          <text x={666} y={36} textAnchor="middle" {...name} fontSize={13.5}>
            Rob, Chairman
          </text>
          <text x={666} y={52} textAnchor="middle" {...sub}>
            sole source of command
          </text>
        </g>

        {/* Report to the Chairman */}
        <Node x={24} y={110} stripe="hub" title="The Chaos Aggregator" note="control tower on a" note2="second AI platform" />
        <Node x={186} y={110} stripe="staff" title="Noah, Corpus Backup" note="owns the offsite backup" note2="of the AI work" />
        <Node x={348} y={110} stripe="seat" title="Paul, Project Forge" note="operations and projects" note2="hub, the busiest seat" />
        <Node x={510} y={110} stripe="seat" parked title="John" note="long-form writing" note2="parked" />
        <Node x={672} y={110} stripe="seat" parked title="George" note="wellness-studio lane" note2="parked, data help on call" />
        <Node x={834} y={110} stripe="seat" parked title="Ringo, The Foundries" note="idea and skill foundries" note2="parked" />
        <Node x={996} y={110} stripe="staff" title="Percy, Fantasy Sports" note="fantasy-sports lane" />
        <Node x={1158} y={110} stripe="staff" title="Gifford" note="communication lane" note2="seat conferred Nov 2026" />
        <Node x={1320} y={110} stripe="staff" title="Agent Org" note="chart and messaging-law" note2="steward, no command" />

        {/* Control tower */}
        <Node x={24} y={236} stripe="hub" title="The Hub Desk" note="runs the control tower" note2="day to day" />
        <Node x={24} y={322} stripe="staff" dashed title="Redacted lanes" note="private, quarantine law" note2="placement withheld" />

        {/* Under Paul */}
        <Node x={380} y={230} w={210} h={52} centered={false} stripe="staff" title="Marty, day-job division" note="supports the day job" note2="8 seats: 4 active, 4 parked" />
        <Node x={380} y={292} w={210} h={52} centered={false} stripe="staff" title="A venture lane" note="files and oversight under Paul" note2="the Chairman works it directly" />
        <Node x={380} y={354} w={210} h={52} centered={false} stripe="staff" title="Funnel Master" note="pipeline operations" />
        <Node x={380} y={416} w={210} h={52} centered={false} stripe="staff" parked title="Certification and Skill Expert" note="professional development" note2="parked, kept open by ruling" />
        <Node x={380} y={478} w={210} h={52} centered={false} stripe="staff" accentBorder title="Carlos, Web and Brand" note="builds and deploys this site" />

        {/* Retired since the first edition */}
        <g>
          <rect
            x={1036}
            y={388}
            width={434}
            height={142}
            rx={8}
            fill="none"
            stroke="var(--muted)"
            strokeDasharray="5 3"
          />
          <text x={1052} y={410} fontSize={12} fontWeight={600} fill="var(--muted)">
            Retired since the first edition: 8 seats
          </text>
          <g fontSize={10.5} fill="var(--muted)">
            <text x={1052} y={432}>The President, Apple Corps &middot; Elston, Career Counselor</text>
            <text x={1052} y={450}>The Wolf &middot; the Task desk &middot; the first Carlos</text>
            <text x={1052} y={468}>Two draft-day desks &middot; a web-research seat</text>
            <text x={1052} y={492}>Each on the Chairman&apos;s ruling. The two with work</text>
            <text x={1052} y={510}>in flight handed it to another seat.</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

export function OrgChartLegend() {
  const items: { swatch: React.ReactNode; label: string }[] = [
    {
      swatch: (
        <span
          className="inline-block h-3.5 w-3.5 border-l-4 bg-bg"
          style={{ borderColor: "var(--accent)" }}
        />
      ),
      label: "Apple Corps seat, ratified charter on disk",
    },
    {
      swatch: (
        <span
          className="inline-block h-3.5 w-3.5 border-l-4 bg-bg"
          style={{ borderColor: "var(--ink)" }}
        />
      ),
      label: "control tower",
    },
    {
      swatch: (
        <span
          className="inline-block h-3.5 w-3.5 border-l-4 bg-bg"
          style={{ borderColor: "var(--muted)" }}
        />
      ),
      label: "staff or lane",
    },
    {
      swatch: (
        <span
          className="inline-block h-3.5 w-3.5 border-l-4 bg-bg opacity-50"
          style={{ borderColor: "var(--muted)" }}
        />
      ),
      label: "parked: listed, not swept",
    },
    {
      swatch: (
        <span className="inline-block h-3.5 w-3.5 border border-dashed border-muted" />
      ),
      label: "redacted, or retired",
    },
  ];
  return (
    <div className="mt-5 mb-4 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted">
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          {item.swatch}
          {item.label}
        </span>
      ))}
    </div>
  );
}
