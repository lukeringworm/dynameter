import { loginAdmin } from "../../server/adminAuth";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const body = req.body || {};
    const result = await loginAdmin(body.username, body.password);

    if (result.success) {
      res.status(200).json({ message: "Login successful", token: result.token });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error in /api/admin/login:", error);
    res.status(500).json({ error: "Login failed" });
  }
}
