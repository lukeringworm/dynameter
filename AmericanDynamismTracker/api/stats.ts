import { getAdminStats } from "../../server/adminStats";

export default async function handler(req, res) {
  try {
    const stats = await getAdminStats();

    res.status(200).json({
      rssFeeds: stats.rssFeeds || {},
      articles: stats.articles || {},
      processing: stats.processing || {},
      system: stats.system || {},
    });
  } catch (error) {
    console.error("Error in /api/admin/stats:", error);
    res.status(500).json({ error: "Failed to fetch admin stats" });
  }
}
