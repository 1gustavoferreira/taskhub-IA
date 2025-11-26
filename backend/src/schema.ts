import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Task {
    id: ID!
    title: String!
    description: String
    status: String!
    owner: ID!
  }

  type AuthPayload {
    token: String!
  }

  type Query {
    listTasks: [Task!]!
    users: [User!]!
  }

  type Mutation {
    registerUser(name: String!, email: String!, password: String!): User!
    loginUser(email: String!, password: String!): AuthPayload!
    createTask(title: String!, description: String): Task!
    updateTask(id: ID!, title: String, description: String, status: String): Task
    deleteTask(id: ID!): Boolean!
  }
`;

export default typeDefs;
