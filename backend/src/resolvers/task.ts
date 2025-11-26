import Task from "../models/Task";

export const taskResolvers = {
  Query: {
    listTasks: async (_: any, __: any, { user }: any) => {
      if (!user) throw new Error("Authentication required");
      return await Task.find({ owner: user.id });
    },
  },
  Mutation: {
    createTask: async (_: any, { title, description }: any, { user }: any) => {
      if (!user) throw new Error("Authentication required");
      const task = new Task({ title, description, status: "PENDING", owner: user.id });
      await task.save();
      return task;
    },
    updateTask: async (_: any, { id, title, description, status }: any, { user }: any) => {
      if (!user) throw new Error("Authentication required");
      const task = await Task.findOneAndUpdate(
        { _id: id, owner: user.id },
        { title, description, status },
        { new: true }
      );
      if (!task) throw new Error("Task not found or not authorized");
      return task;
    },
    deleteTask: async (_: any, { id }: any, { user }: any) => {
      if (!user) throw new Error("Authentication required");
      const result = await Task.deleteOne({ _id: id, owner: user.id });
      return result.deletedCount > 0;
    },
  },
};
