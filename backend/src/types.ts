export interface UserType {
  id: string;
  name: string;
  email: string;
}

export interface TaskType {
  id: string;
  title: string;
  description?: string;
  status: string;
  owner: string;
}

export interface AuthPayload {
  token: string;
}
