import { getSystemInfo } from "../../server/adminStats";

export default async function handler(req, res) {
  try {
    const info = await getSystemInfo();
    res.status(200).json(info);
  } catch (error) {
    console.error("Error in /api/admin/system-info:", error);
    res.status(500).json({ error: "Failed to fetch system info" });
  }
}
