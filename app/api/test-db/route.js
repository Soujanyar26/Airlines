import db from "@/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query("SELECT * FROM Flight");
    return Response.json({ flights: rows });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
