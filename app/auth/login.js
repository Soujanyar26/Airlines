"use server";
import db from "@/lib/db";
import bcrypt from "bcryptjs";

export async function loginUser(email, password) {
  try {
    // Fetch user from database
    const [rows] = await db.query("SELECT * FROM Users WHERE email = ?", [email]);
    if (rows.length === 0) return { success: false, error: "User not found" };

    const user = rows[0];

    // Compare entered password with hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return { success: false, error: "Invalid credentials" };

    return { success: true, userId: user.userId, name: user.name };
  } catch (error) {
    console.error("Error logging in:", error);
    return { success: false, error: "Login failed" };
  }
}
