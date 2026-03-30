import { TaskPriority } from "../enums/TaskPriority";
import { TaskStatus } from "../enums/TaskStatus";

export class Task {
  constructor(
    public taskId: string,
    public cpu: number,
    public memory: number,
    public executionTime: number,
    public priority: TaskPriority = TaskPriority.UNKNOWN,
    public status: TaskStatus = TaskStatus.QUEUED,
    public assignedTo: string | null = null,
    public timer?: ReturnType<typeof setTimeout>,
  ) {
    this.priority = priority;
  }
}
