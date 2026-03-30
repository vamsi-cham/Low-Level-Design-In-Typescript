import { TaskPriority } from "../enums/TaskPriority";

export type Tasks = {
  taskId: string;
  cpu: number;
  memory: number;
  executionTime: number;
  priority?: TaskPriority;
};