import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protect = async (req, res, next) => {
  try {
    let token;
    token = req.cookies.jwt; // cookie-parser allows this

    if (!token) {
      res.status(401);
      throw new Error("User is not Authenticated");
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.userId).select("-password"); // don't return password -> projection

      next(); // allows it to move forward
    } catch (error) {
      next(new Error("Invalid token"));
    }
  } catch (error) {
    next(error);
  }
};

export { protect };
