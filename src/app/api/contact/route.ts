import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  studio?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Payload;

  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "That did not look like a form." },
      { status: 400 },
    );
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const studio = String(body.studio ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !studio || !message) {
    return NextResponse.json(
      { ok: false, message: "Every field needs something in it." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, message: "That email does not look right." },
      { status: 400 },
    );
  }

  const destination = process.env.CONTACT_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;

  if (resendKey && destination) {
    const sent = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Rob Stickler site <onboarding@resend.dev>",
        to: [destination],
        reply_to: email,
        subject: `Note from ${name}`,
        text: [`Name: ${name}`, `Email: ${email}`, `Studio: ${studio}`, "", message].join(
          "\n",
        ),
      }),
    });

    if (!sent.ok) {
      return NextResponse.json(
        {
          ok: false,
          fallback: "linkedin",
          message: "Mail did not go through. Opening LinkedIn is the backup.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  }

  if (destination) {
    const sent = await fetch(`https://formsubmit.co/ajax/${destination}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        studio,
        message,
        _subject: `Note from ${name}`,
      }),
    });

    if (!sent.ok) {
      return NextResponse.json(
        {
          ok: false,
          fallback: "linkedin",
          message: "Mail did not go through. Opening LinkedIn is the backup.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  }

  return NextResponse.json(
    {
      ok: false,
      fallback: "linkedin",
      message: "Inbox is not wired yet. LinkedIn will open so nothing gets lost.",
    },
    { status: 503 },
  );
}
