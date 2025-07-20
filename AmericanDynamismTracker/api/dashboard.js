export default function handler(req, res) {
  res.status(200).json({
    message: "Dashboard data loaded successfully",
    data: {
      adIndex: 75,
      categories: [
        { name: "Defense", score: 80 },
        { name: "Manufacturing", score: 70 },
        { name: "Labor Development", score: 65 },
        { name: "Energy", score: 60 },
        { name: "Tech Policy", score: 72 },
        { name: "Supply Chains", score: 68 }
      ]
    }
  });
}
