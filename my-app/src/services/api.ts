import { Tariff } from "@/types/types";

const CACHED = 60 * 60;

export async function getTariffs(): Promise<Tariff[] | null> {
  try {
    const url = getBaseUrl();
    const apiUrl = `${url}/api/data`;

    const response = await fetch(apiUrl, {
      next: { revalidate: CACHED },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data`);
    }

    return await response.json();
  } catch {
    return null;
  }
}

function getBaseUrl() {
  if (typeof window !== "undefined") {
    return "";
  }
  return process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000/";
}
