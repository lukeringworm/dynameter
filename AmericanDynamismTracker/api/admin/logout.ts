import { logoutAdmin } from "../../server/adminAuth";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    await logoutAdmin();
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in /api/admin/logout:", error);
    res.status(500).json({ error: "Logout failed" });
  }
}
