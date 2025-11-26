import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import typeDefs from "./schema";
import { resolvers } from "./resolvers";
import { connectDB } from "./db/connect";
import { context } from "./context";

dotenv.config();

const PORT: number = process.env.PORT ? Number(process.env.PORT) : 4000;
const MONGO_URI: string = process.env.MONGO_URI || "mongodb://localhost:27017/taskhub";

async function start() {
  await connectDB(MONGO_URI);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context,
  });

  server.listen({ port: PORT }).then(({ url }) => {
    console.log(`🚀 GraphQL server rodando em ${url}`);
  });
}

start().catch((err: unknown) => {
  console.error("❌ Falha ao iniciar o servidor:", err);
});
