export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(req: Request) {
  const baseUrl = process.env.OLLAMA_URL ?? process.env.EBURON_URL;

  if (!baseUrl) {
    console.error("OLLAMA_URL/EBURON_URL env var not set; cannot fetch tags");
    return new Response(
      JSON.stringify({ error: "OLLAMA_URL env var not configured" }),
      { status: 500 }
    );
  }

  console.log("OLLAMA_URL:", baseUrl);

  const res = await fetch(`${baseUrl}/api/tags`);
  return new Response(res.body, res);
}
