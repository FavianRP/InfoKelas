import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "ini_rahasia";

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return null;
  }
}

// Contoh penggunaan di API
export function requireAdmin(req) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;

  const token = authHeader.split(" ")[1];
  const user = verifyToken(token);
  if (!user || user.role !== "admin") return null;

  return user;
}
