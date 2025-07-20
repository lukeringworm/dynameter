import { updateMilestones } from "../../server/milestoneService";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    await updateMilestones();
    res.status(200).json({ message: "Milestones updated successfully" });
  } catch (error) {
    console.error("Error in /api/admin/update-milestones:", error);
    res.status(500).json({ error: "Failed to update milestones" });
  }
}
