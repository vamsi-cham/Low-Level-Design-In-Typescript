import { WorkerStatus } from "../enums/WorkerStatus";
import { Tasks } from "../types/Tasks";

export class WorkerNode {
  public availableCpu: number;
  public availableMemory: number;
  public status: WorkerStatus = WorkerStatus.ACTIVE;
  public tasks: Set<string> = new Set();

  constructor(
    public nodeId: string,
    public cpu: number,
    public memory: number,
    public speed: number
  ) {
    this.availableCpu = cpu;
    this.availableMemory = memory;
  }

  canRun(task: Tasks): boolean {
    return (
      this.status === WorkerStatus.ACTIVE &&
      this.availableCpu >= task.cpu &&
      this.availableMemory >= task.memory
    );
  }

  allocate(task: Tasks) {
    this.availableCpu -= task.cpu;
    this.availableMemory -= task.memory;
    this.tasks.add(task.taskId);
  }

  release(task: Tasks) {
    this.availableCpu += task.cpu;
    this.availableMemory += task.memory;
    this.tasks.delete(task.taskId);
  }
}
