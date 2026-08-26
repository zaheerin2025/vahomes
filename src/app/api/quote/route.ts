import { NextResponse } from "next/server";
import { db } from "@/lib/db";

type QuotePayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  date?: string;
  message?: string;
  details?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as QuotePayload;

    // basic validation
    if (!body.name || !String(body.name).trim()) {
      return NextResponse.json(
        { ok: false, error: "Name is required." },
        { status: 400 }
      );
    }
    if (!body.phone || !String(body.phone).trim()) {
      return NextResponse.json(
        { ok: false, error: "Phone is required." },
        { status: 400 }
      );
    }
    if (!body.service || !String(body.service).trim()) {
      return NextResponse.json(
        { ok: false, error: "Service is required." },
        { status: 400 }
      );
    }

    const record = await db.quoteRequest.create({
      data: {
        name: String(body.name).trim().slice(0, 120),
        phone: String(body.phone).trim().slice(0, 40),
        email: body.email ? String(body.email).trim().slice(0, 160) : null,
        service: String(body.service).slice(0, 80),
        date: body.date ? String(body.date).slice(0, 40) : null,
        message: body.message ? String(body.message).trim().slice(0, 500) : null,
        details: body.details ? String(body.details).trim().slice(0, 1000) : null,
        status: "new",
      },
    });

    return NextResponse.json({
      ok: true,
      id: record.id,
      message: "Quote request received. We'll be in touch soon!",
    });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again or call us." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const requests = await db.quoteRequest.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
      select: {
        id: true,
        name: true,
        service: true,
        status: true,
        createdAt: true,
      },
    });
    return NextResponse.json({ ok: true, requests });
  } catch (err) {
    console.error("Quote list error:", err);
    return NextResponse.json(
      { ok: false, error: "Unable to load requests." },
      { status: 500 }
    );
  }
}
