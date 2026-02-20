import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, phone, email } = body;
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Name, phone, and email are required" },
        { status: 400 }
      );
    }

    // Log lead for now (in production, persist to database)
    // eslint-disable-next-line no-console
    console.log("[LEAD]", JSON.stringify(body, null, 2));

    // FUTURE INTEGRATION POINTS - Add webhook calls here:
    // - This is where to send webhook to n8n (POST to n8n webhook URL with body)
    // - This is where to connect Gumloop (send lead data to Gumloop API)
    // - This is where to push to CRM (Salesforce, HubSpot, etc.)
    // - This is where to connect SMS automation (send confirmation SMS)
    // - This is where to trigger email automation (welcome/confirmation email)

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
