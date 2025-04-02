import db from "./lib/db.js";

async function testDBConnection() {
  try {
    const [rows] = await db.query("SELECT 1");
    console.log("✅ Database connection successful!", rows);
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
}

testDBConnection();
