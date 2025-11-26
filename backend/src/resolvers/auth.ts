import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import validator from "validator";

export const authResolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
  },
  Mutation: {
    registerUser: async (_: any, { name, email, password }: any) => {
      if (!validator.isEmail(email)) {
        throw new Error("Invalid email format");
      }
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters long");
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("Email already registered");
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, email, password: hashedPassword });
      await user.save();
      return user;
    },
    loginUser: async (_: any, { email, password }: any) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error("User not found");

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw new Error("Invalid password");

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "secret", {
        expiresIn: "1d",
      });
      return { token };
    },
  },
};
