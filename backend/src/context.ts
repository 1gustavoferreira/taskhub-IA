import jwt from "jsonwebtoken";
import User from "./models/User";

export const context = async ({ req }: any) => {
  const auth = req.headers.authorization || "";
  if (auth) {
    const token = auth.replace("Bearer ", "");
    try {
      const decoded: any = jwt.verify(token, process.env.JWT_SECRET || "secret");
      const user = await User.findById(decoded.userId);
      return { user };
    } catch (err) {
      console.error("Token inválido:", err);
    }
  }
  return {};
};
