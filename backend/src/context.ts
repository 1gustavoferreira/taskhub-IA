import jwt from "jsonwebtoken";
import User from "./models/User";

export const context = async ({ req }: any) => {
  const auth = req.headers.authorization || "";
  if (auth) {
    const token = auth.replace("Bearer ", "");
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET || "secret");
      const user = await User.findById(decoded.userId);
      if (!user) throw new Error("Invalid token");
      return { user };
    } catch (err) {
      throw new Error("Invalid or expired token");
    }
  }
  return {};
};
