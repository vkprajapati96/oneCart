import jwt from "jsonwebtoken";

export const isAuth = (req, res, next) => {
  try {
    // 1. Cookie se token nikal
    const { token } = req.cookies;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Not authenticated, token missing" });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    // 3. User ID ko request me attach kar (baad me kaam aayega)
    req.userId = verifyToken.userId;

    // 4. Aage route chalne do
    next();
  } catch (error) {
    console.log("isAuth Error",error)
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
