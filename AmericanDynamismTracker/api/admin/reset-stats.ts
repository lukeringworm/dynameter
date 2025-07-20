import { resetStats } from "../../server/adminStats";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    await resetStats();
    res.status(200).json({ message: "Stats reset successfully" });
  } catch (error) {
    console.error("Error in /api/admin/reset-stats:", error);
    res.status(500).json({ error: "Failed to reset stats" });
  }
}
