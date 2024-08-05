import jwt from "jsonwebtoken";

const secret = "test"; // Consider using an environment variable for this

export const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Authentication failed: No token provided" });
    }

    let decodedData;

    // Check if it's a Google token (they are typically longer)
    if (token.length > 500) {
      // For Google OAuth
      decodedData = jwt.decode(token);
      if (!decodedData) {
        return res.status(401).json({ message: "Invalid token" });
      }
      req.userId = decodedData.sub;
    } else {
      // For custom authentication
      try {
        decodedData = jwt.verify(token, secret);
        req.userId = decodedData.id;
      } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
      }
    }

    next();
  } catch (error) {
    console.error("Auth middleware error:", error);
    res
      .status(500)
      .json({ message: "Something went wrong with authentication" });
  }
};


