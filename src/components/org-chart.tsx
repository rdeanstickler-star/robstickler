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
  w = 180,
  h = 48,
  stripe,
  title,
  note,
  dashed = false,
  centered = false,
  accentBorder = false,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  stripe: Stripe;
  title: string;
  note: string;
  dashed?: boolean;
  centered?: boolean;
  accentBorder?: boolean;
}) {
  const tx = centered ? x + w / 2 : x + 14;
  const anchor = centered ? "middle" : "start";
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={8}
        fill={box.fill}
        stroke={accentBorder ? "var(--accent)" : box.stroke}
        strokeWidth={accentBorder ? 1.4 : 1}
        strokeDasharray={dashed ? "5 3" : undefined}
      />
      <rect
        x={x + 1}
        y={y + 1}
        width={4}
        height={h - 2}
        rx={2}
        fill={stripeColor[stripe]}
      />
      <text x={tx} y={y + 19} textAnchor={anchor} {...name}>
        {title}
      </text>
      <text x={tx} y={y + 34} textAnchor={anchor} {...sub}>
        {note}
      </text>
    </g>
  );
}

export function OrgChart() {
  return (
    <div className="overflow-x-auto border border-line bg-bg-elev p-4 md:p-6">
      <svg
        role="img"
        aria-label="Organization chart. Rob, the Chairman, sits at the top as the sole source of command. Three branches report to him: the Chaos Aggregator control tower with the Hub Desk operating it, and under the Hub Desk a staff spine carrying The Wolf, the Task desk, and several redacted seats under the quarantine law; the President of Apple Corps over the four division seats John, Paul, George and Ringo, with Paul's four surrogate seats on a spine below Paul; and Agent Org, the protocol steward. Fantasy Command connects to the Chairman directly. Dashed boxes and lines mark placements not yet ratified, or redacted. A text version of every seat follows this chart."
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1450 545"
        className="mx-auto block h-auto min-w-[1280px] max-w-none"
      >
        {/* connectors */}
        <g stroke="var(--muted)" strokeWidth={1.2} fill="none" opacity={0.8}>
          {/* Rob to bus, bus across, drops */}
          <path d="M645,64 V84 M170,84 H1250 M170,84 V104 M645,84 V104 M1030,84 V104" />
          {/* CA to Hub Desk */}
          <path d="M170,162 V200" />
          {/* President to managers bus */}
          <path d="M645,162 V180 M385,180 H925 M385,180 V200 M565,180 V200 M745,180 V200 M925,180 V200" />
          {/* Paul surrogates spine */}
          <path d="M565,252 V264 H483 V492 M483,324 H495 M483,380 H495 M483,436 H495 M483,492 H495" />
          {/* Fantasy Command: Rob-direct, long drop to staff height */}
          <path d="M1250,84 V324 M1250,324 H1260" />
        </g>
        {/* Hub Desk staff spine, dashed = placement unconfirmed */}
        <g
          stroke="var(--muted)"
          strokeWidth={1.2}
          fill="none"
          opacity={0.8}
          strokeDasharray="4 3"
        >
          <path d="M170,252 V264 H88 V436 M88,324 H98 M88,380 H98 M88,436 H98" />
        </g>

        {/* edge labels */}
        <g fontSize={9.5} fill="var(--muted)">
          <text x={573} y={262}>
            surrogates
          </text>
          <text x={1242} y={296} textAnchor="end">
            works with the Chairman directly
          </text>
        </g>

        {/* Chairman */}
        <g>
          <rect
            x={545}
            y={14}
            width={200}
            height={50}
            rx={9}
            fill="var(--accent)"
            fillOpacity={0.12}
            stroke="var(--accent)"
            strokeWidth={1.4}
          />
          <text x={645} y={36} textAnchor="middle" {...name} fontSize={13.5}>
            Rob, Chairman
          </text>
          <text x={645} y={52} textAnchor="middle" {...sub}>
            sole source of command
          </text>
        </g>

        {/* Tier 1 */}
        <Node
          x={70}
          y={104}
          w={200}
          h={58}
          stripe="hub"
          centered
          title="The Chaos Aggregator"
          note="control tower, on a second AI platform"
        />
        <Node
          x={545}
          y={104}
          w={200}
          h={58}
          stripe="seat"
          centered
          title="The President, Apple Corps"
          note="division chief, no project work"
        />
        <Node
          x={930}
          y={104}
          w={200}
          h={58}
          stripe="staff"
          centered
          title="Agent Org"
          note="chart and messaging-protocol steward"
        />

        {/* Tier 2 */}
        <Node
          x={70}
          y={200}
          w={200}
          h={52}
          stripe="hub"
          centered
          title="The Hub Desk"
          note="runs the control tower day to day"
        />
        <Node
          x={305}
          y={200}
          w={160}
          h={52}
          stripe="seat"
          centered
          title="John"
          note="long-form writing project"
        />
        <Node
          x={485}
          y={200}
          w={160}
          h={52}
          stripe="seat"
          centered
          title="Paul, Project Forge"
          note="operations and projects hub"
        />
        <Node
          x={665}
          y={200}
          w={160}
          h={52}
          stripe="seat"
          centered
          title="George"
          note="wellness-studio partnership"
        />
        <Node
          x={845}
          y={200}
          w={160}
          h={52}
          stripe="seat"
          centered
          title="Ringo, The Foundries"
          note="the idea and skill foundries"
        />

        {/* Paul surrogates */}
        <Node
          x={495}
          y={300}
          stripe="staff"
          accentBorder
          title="Carlos, Web and Brand"
          note="builds and deploys this site"
        />
        <Node
          x={495}
          y={356}
          stripe="staff"
          title="Elston, Career Counselor"
          note="career-strategy counsel"
        />
        <Node
          x={495}
          y={412}
          stripe="staff"
          title="Funnel Master"
          note="pipeline operations"
        />
        <Node
          x={495}
          y={468}
          stripe="staff"
          title="Certification and Skill Expert"
          note="professional development"
        />

        {/* Hub Desk staff stack */}
        <Node
          x={98}
          y={300}
          stripe="staff"
          dashed
          title="The Wolf"
          note="routine and task audits"
        />
        <Node
          x={98}
          y={356}
          stripe="staff"
          dashed
          title="Task desk"
          note="task herding"
        />
        <g>
          <rect
            x={98}
            y={412}
            width={180}
            height={48}
            rx={8}
            fill="none"
            stroke="var(--muted)"
            strokeDasharray="5 3"
          />
          <text
            x={112}
            y={431}
            fontSize={12}
            fontWeight={600}
            fill="var(--muted)"
          >
            Redacted, several seats
          </text>
          <text x={112} y={446} {...sub}>
            quarantine law
          </text>
        </g>

        {/* Rob-direct lane */}
        <Node
          x={1260}
          y={300}
          stripe="staff"
          title="Fantasy Command"
          note="fantasy-sports lane"
        />
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
      label: "chartered seat, ratified charter on disk",
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
        <span className="inline-block h-3.5 w-3.5 border border-dashed border-line" />
      ),
      label: "placement not yet ratified, or redacted",
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
