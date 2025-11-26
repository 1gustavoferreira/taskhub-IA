import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Task {
    id: ID!
    title: String!
    description: String
    user: User
  }

  type Query {
    users: [User]
    user(id: ID!): User
    tasks: [Task]
    task(id: ID!): Task
  }
`;
