import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { phone } = body;
    if (!phone) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    // Log chat lead for now (in production, persist to database)
    // eslint-disable-next-line no-console
    console.log("[CHAT-LEAD]", JSON.stringify(body, null, 2));

    // FUTURE INTEGRATION POINTS - Add webhook calls here:
    // - This is where to send webhook to n8n (POST chat lead data to n8n)
    // - This is where to connect Gumloop (qualification flow automation)
    // - This is where to connect SMS automation (immediate follow-up SMS)
    // - This is where to push to CRM (qualified lead with answers)
    // - Structure supports OpenAI API later for conversational AI

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
