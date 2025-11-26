// backend/src/resolvers.ts

export const resolvers = {
  Query: {
    // LIST
    users: async () => [
      { id: "u1", name: "Gustavo", email: "g@email.com" },
      { id: "u2", name: "Maria", email: "m@email.com" },
    ],
    tasks: async () => [
      { id: "t1", title: "Estudar GraphQL", description: "Dia 8", user: { id: "u1", name: "Gustavo", email: "g@email.com" } },
      { id: "t2", title: "Criar frontend", description: "Dia 9", user: { id: "u2", name: "Maria", email: "m@email.com" } },
    ],

    // SINGLE
    user: async (_: unknown, args: { id: string }) => {
      const all = [
        { id: "u1", name: "Gustavo", email: "g@email.com" },
        { id: "u2", name: "Maria", email: "m@email.com" },
      ];
      return all.find(u => u.id === args.id) || null;
    },
    task: async (_: unknown, args: { id: string }) => {
      const all = [
        { id: "t1", title: "Estudar GraphQL", description: "Dia 8", user: { id: "u1", name: "Gustavo", email: "g@email.com" } },
        { id: "t2", title: "Criar frontend", description: "Dia 9", user: { id: "u2", name: "Maria", email: "m@email.com" } },
      ];
      return all.find(t => t.id === args.id) || null;
    },
  },

  // Field resolver (opcional se já vier populado)
  Task: {
    user: async (parent: { user?: { id: string; name: string; email: string } }) => {
      return parent.user ?? null;
    },
  },
};
