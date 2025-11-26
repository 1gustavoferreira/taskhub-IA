"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`;

interface User {
  id: string;
  name: string;
  email: string;
}

interface UsersData {
  users: User[];
}

export default function UsersPage() {
  const { loading, error, data } = useQuery<UsersData>(GET_USERS);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {data?.users.map((user: User) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
