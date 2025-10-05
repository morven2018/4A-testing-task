import { NextResponse } from "next/server";

const URL = "https://t-core.fit-hub.pro/Test/GetTariffs";

export async function GET() {
  try {
    const resp = await fetch(URL);
    if (!resp.ok) {
      return NextResponse.json(
        { error: "Not success response" },
        { status: 500 }
      );
    }
    return resp;
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
