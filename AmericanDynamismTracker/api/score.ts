import { getCurrentScore } from "../server/rssService";
import { getMilestones } from "../server/milestoneService";

export default async function handler(req, res) {
  try {
    // Fetch current score from RSS logic
    const scoreData = await getCurrentScore();

    // Fetch milestone info
    const milestones = await getMilestones();

    res.status(200).json({
      adIndex: scoreData.adIndex || 0,
      trendData: scoreData.trendData || [],
      categories: scoreData.categories || {},
      milestones: milestones || [],
    });
  } catch (error) {
    console.error("Error in /api/score:", error);
    res.status(500).json({ error: "Failed to fetch score data" });
  }
}
