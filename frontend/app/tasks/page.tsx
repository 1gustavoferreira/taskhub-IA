"use client";

import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";

const GET_TASKS = gql`
  query {
    tasks {
      id
      title
      description
      user {
        name
      }
    }
  }
`;

interface Task {
  id: string;
  title: string;
  description?: string;
  user?: {
    name: string;
  };
}

interface TasksData {
  tasks: Task[];
}

export default function TasksPage() {
  const { loading, error, data } = useQuery<TasksData>(GET_TASKS);

  if (loading) return <p>Carregando tarefas...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div>
      <h1>Tarefas</h1>
      <ul>
        {data?.tasks.map((task: Task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> — {task.description} <br />
            <em>Responsável: {task.user?.name || "Sem dono"}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
