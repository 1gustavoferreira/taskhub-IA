import { authResolvers } from "./resolvers/auth";
import { taskResolvers } from "./resolvers/task";

export const resolvers = [authResolvers, taskResolvers];
