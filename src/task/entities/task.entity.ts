/* The Task class represents a task with an id, title, description, and status. */
export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
