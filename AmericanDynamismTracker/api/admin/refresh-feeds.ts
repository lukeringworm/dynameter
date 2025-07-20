import { refreshFeeds } from "../../server/rssService";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    await refreshFeeds();
    res.status(200).json({ message: "Feeds refreshed successfully" });
  } catch (error) {
    console.error("Error in /api/admin/refresh-feeds:", error);
    res.status(500).json({ error: "Failed to refresh feeds" });
  }
}
