import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { NewTaskData } from './task/task.model';
@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks = dummyTasks;
  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }
  addtask(taskData: NewTaskData, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
  }
  removeTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
