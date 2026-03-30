import { TaskPriority } from "../enums/TaskPriority";
import { TaskStatus } from "../enums/TaskStatus";
import { WorkerStatus } from "../enums/WorkerStatus";
import { Task } from "../models/Task";
import { WorkerNode } from "../models/WorkerNode";
import { Tasks } from "../types/Tasks";
import { Workers } from "../types/Workers";

export class TaskScheduler {
  private workers = new Map<string, WorkerNode>();
  private tasks = new Map<string, Task>();
  private taskQueue: Task[] = [];

  registerWorker(input: Workers) {
    this.workers.set(
      input.nodeId,
      new WorkerNode(input.nodeId, input.cpu, input.memory, input.speed)
    );
    this.tryAssignTasks();
  }

  listWorkers() {
    return [...this.workers.values()].map(w => ({
      nodeId: w.nodeId,
      cpu: w.cpu,
      memory: w.memory,
      speed: w.speed,
      status: w.status
    }));
  }

  simulateWorkerFailure(nodeId: string) {
    const worker = this.workers.get(nodeId);
    if (!worker) return;

    worker.status = WorkerStatus.INACTIVE;

    for (const taskId of worker.tasks) {
        const task = this.tasks.get(taskId)!;

        if (task.status === TaskStatus.COMPLETED) continue;

        if (task.timer) clearTimeout(task.timer);

        task.status = TaskStatus.QUEUED;
        task.assignedTo = null;
        this.taskQueue.push(task);
    }

    worker.tasks.clear();
    worker.availableCpu = worker.cpu;
    worker.availableMemory = worker.memory;

    this.tryAssignTasks();
  }

  submitTasks(inputs: Tasks[]) {
    for (const t of inputs) {
      const task = new Task(t.taskId, t.cpu, t.memory, t.executionTime, t.priority);
      this.tasks.set(task.taskId, task);
      this.taskQueue.push(task);
    }
    this.taskQueue.sort((a, b) => {
      const order = {
        [TaskPriority.HIGH]: 3,
        [TaskPriority.MEDIUM]: 2,
        [TaskPriority.LOW]: 1,
        [TaskPriority.UNKNOWN]: 0
      };
      return order[b.priority] - order[a.priority];
    });
    this.tryAssignTasks();
  }

  listTasks() {
    return [...this.tasks.values()].map(t => ({
      taskId: t.taskId,
      status: t.status,
      assignedTo: t.assignedTo,
      priority: t.priority
    }));
  }

  private tryAssignTasks() {
    this.taskQueue = this.taskQueue.filter(task => {
      const worker = this.findBestWorker(task);
      if (!worker) return true;

      this.assignTask(task, worker);
      return false;
    });
  }

  private findBestWorker(task: Task): WorkerNode | null {
    const candidates = [...this.workers.values()]
      .filter(w => w.canRun(task))
      .sort((a, b) => b.speed - a.speed);

    return candidates[0] || null;
  }

  private assignTask(task: Task, worker: WorkerNode) {
    task.status = TaskStatus.ASSIGNED;
    task.assignedTo = worker.nodeId;

    worker.allocate(task);

    task.timer = setTimeout(() => {
      if (task.status !== TaskStatus.ASSIGNED) return;
      
      task.status = TaskStatus.COMPLETED;
      worker.release(task);
      this.tryAssignTasks();
    }, task.executionTime * 1000);
  }

  resetScheduler() {
    this.workers.clear();
    this.tasks.clear();
    this.taskQueue = [];
  }

  cancelTask(taskId: string) {
    const task = this.tasks.get(taskId);
    if (!task) return;

    // If task is queued
    if (task.status === TaskStatus.QUEUED) {
      this.taskQueue = this.taskQueue.filter(t => t.taskId !== taskId);
      task.status = TaskStatus.CANCELLED;
      task.assignedTo = null;
      return;
    }

    // If task is assigned
    if (task.status === TaskStatus.ASSIGNED && task.assignedTo) {
      const worker = this.workers.get(task.assignedTo);
      if (worker) {
        if (task.timer) clearTimeout(task.timer);
        worker.release(task);
      }

      task.status = TaskStatus.CANCELLED;
      task.assignedTo = null;

      this.tryAssignTasks();
  }
}

}
