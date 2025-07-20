export default function handler(req, res) {
  res.status(200).json({
    message: "Latest news",
    articles: [
      { title: "Anduril wins major DoD contract", score: 5, category: "Defense" },
      { title: "New battery plant announced in Texas", score: 4, category: "Manufacturing" },
      { title: "US labor force participation rises", score: 3, category: "Labor Development" }
    ]
  });
}
