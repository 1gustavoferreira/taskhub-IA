import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const authResolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
  },
  Mutation: {
    registerUser: async (_: any, { name, email, password }: any) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, email, password: hashedPassword });
      await user.save();
      return user;
    },
    loginUser: async (_: any, { email, password }: any) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error("Usuário não encontrado");

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw new Error("Senha inválida");

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "secret");
      return { token };
    },
  },
};
