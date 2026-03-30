import { TaskPriority } from "./enums/TaskPriority";
import { TaskScheduler } from "./services/TaskScheduler";

const taskScheduler =  new TaskScheduler();

const waitAndListTasks = (time: number) => {
  setTimeout(() => {
    console.log(taskScheduler.listTasks());
  }, time*1000);
}

// //Test Case 1
// taskScheduler.registerWorker({ nodeId: "W1", cpu: 4, memory: 16, speed: 5 });
// taskScheduler.registerWorker({ nodeId: "W2", cpu: 8, memory: 32, speed: 10 });
// console.log(taskScheduler.listWorkers());

// //Test Case 2
// taskScheduler.registerWorker({ nodeId: "W1", cpu: 4, memory: 16, speed: 5 });
// taskScheduler.registerWorker({ nodeId: "W2", cpu: 8, memory: 32, speed: 10 });
// taskScheduler.submitTasks([
// { taskId: "T1", cpu: 2, memory: 8, executionTime: 10 },
// { taskId: "T2", cpu: 4, memory: 16, executionTime: 20 }
// ]);
// console.log(taskScheduler.listTasks());

// // Test Case 3
//(i)
// taskScheduler.registerWorker({ nodeId: "W1", cpu: 4, memory: 16, speed: 5 });
// taskScheduler.submitTasks([{ taskId: "T1", cpu: 2, memory: 8, executionTime: 10 }]);
// waitAndListTasks(10)

//(ii)
// taskScheduler.registerWorker({ nodeId: "W1", cpu: 2, memory: 8, speed: 5 });
// taskScheduler.submitTasks([{ taskId: "T1", cpu: 2, memory: 4, executionTime: 10 },
// { taskId: "T2", cpu: 2, memory: 4, executionTime: 5 }]);
// console.log(taskScheduler.listTasks());


// Test Case 4
// taskScheduler.registerWorker({ nodeId: "W1", cpu: 6, memory: 32, speed: 5 });
// taskScheduler.registerWorker({ nodeId: "W2", cpu: 8, memory: 32, speed: 10 });
// taskScheduler.submitTasks([{ taskId: "T1", cpu: 2, memory: 8, executionTime: 10 },
// { taskId: "T2", cpu: 4, memory: 16, executionTime: 20 }]);
// console.log(taskScheduler.listTasks());
// taskScheduler.simulateWorkerFailure("W2");
// console.log(taskScheduler.listTasks());
// console.log(taskScheduler.listWorkers());

// Test Case 8
// taskScheduler.registerWorker({ nodeId: "W1", cpu: 4, memory: 16, speed: 5 });
// taskScheduler.submitTasks([{ taskId: "T1", cpu: 2, memory: 4, executionTime: 10 }]);
// taskScheduler.cancelTask("T1");
// console.log(taskScheduler.listTasks());


//Test Case 5
// taskScheduler.registerWorker({ nodeId: "W1", cpu: 2, memory: 16, speed: 5 });
// taskScheduler.submitTasks([
//   { taskId: "T1", cpu: 2, memory: 4, executionTime: 10, priority: TaskPriority.LOW },
//   { taskId: "T2", cpu: 2, memory: 4, executionTime: 5, priority: TaskPriority.HIGH }
// ]);
// console.log(taskScheduler.listTasks());

// Test Case 9
// (i)
// taskScheduler.registerWorker({ nodeId: "W1", cpu: 4, memory: 16, speed: 5 });
// taskScheduler.submitTasks([
//   { taskId: "T1", cpu: 2, memory: 4, executionTime: 10 },
//   { taskId: "T2", cpu: 2, memory: 4, executionTime: 5 }
// ]);
// waitAndListTasks(10);

//(ii)
// taskScheduler.registerWorker({ nodeId: "W1", cpu: 4, memory: 16, speed: 5 });
// taskScheduler.registerWorker({ nodeId: "W2", cpu: 8, memory: 32, speed: 10 });
// taskScheduler.submitTasks([{ taskId: "T1", cpu: 2, memory: 8, executionTime: 10 },{ taskId: "T2", cpu: 4, memory: 16, executionTime: 20 }]);
// console.log(taskScheduler.listTasks());
// setTimeout(() => {
//   taskScheduler.simulateWorkerFailure("W2");
//   console.log(taskScheduler.listTasks());
//   console.log(taskScheduler.listWorkers());
//   }, 12*1000);

