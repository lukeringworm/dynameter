export default function handler(req, res) {
  res.status(200).json({
    message: "Milestone data",
    milestones: [
      { name: "Defense", current: 8, target: 10, unit: "contracts" },
      { name: "Manufacturing", current: 320000, target: 500000, unit: "jobs" },
      { name: "Energy", current: 20, target: 50, unit: "GW capacity" },
      { name: "Tech Policy", current: 2, target: 3, unit: "bills passed" },
      { name: "Supply Chains", current: 3, target: 5, unit: "critical plants" }
    ]
  });
}
