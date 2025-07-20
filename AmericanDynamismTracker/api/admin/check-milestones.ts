import { checkMilestones } from "../../server/milestoneService";

export default async function handler(req, res) {
  try {
    const status = await checkMilestones();
    res.status(200).json(status);
  } catch (error) {
    console.error("Error in /api/admin/check-milestones:", error);
    res.status(500).json({ error: "Failed to check milestones" });
  }
}
