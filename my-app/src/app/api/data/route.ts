const URL = "https://t-core.fit-hub.pro/Test/GetTariffs";

export async function GET() {
  try {
    const resp = await fetch(URL);
    if (!resp.ok) {
      return {};
    }
    return resp;
  } catch {
    return {};
  }
}
