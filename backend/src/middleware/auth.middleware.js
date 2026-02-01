import jwt from "jsonwebtoken";

export const protect = (roles = []) => {
  return (req, res, next) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id, role: decoded.role };

        if (roles.length > 0 && !roles.includes(req.user.role)) {
          return res.status(403).json({ message: "Access denied" });
        }

        next();
      } catch (error) {
        return res.status(401).json({ message: "Not authorized, token failed" });
      }
    }

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }
  };
};
