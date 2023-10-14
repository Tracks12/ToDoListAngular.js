import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Task } from 'src/app/_commons/models/task';

@Injectable({
	providedIn: 'root'
})
export class TaskService {

	private taskKey: string = 'tasks-data';

	private tasks$: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>(JSON.parse(localStorage.getItem(this.taskKey)!) || []);
	public tasks: Observable<Task[]> = this.tasks$.asObservable();

	constructor() {}

	public getTasks = (): Task[] => this.tasks$.getValue();

	public updateTasks(tasks: Task[]): void {
		this.tasks$.next(tasks)
		localStorage.setItem(this.taskKey, JSON.stringify(tasks));
	}

	public rebaseTasks = (): void => this.tasks$.next(JSON.parse(localStorage.getItem(this.taskKey)!) || []);
	public resetTasks = (): void => this.updateTasks([]);

	public addTask(task: Task): void {
		const tasks: Task[] = this.getTasks();

		tasks.push(task);
		this.updateTasks(tasks);
	}

	public editTask(task: Task): void {
		const tasks: Task[] = this.getTasks();

		tasks.map((t: Task) => t = task.id === t.id ? task : t);
		this.updateTasks(tasks);
	}

	public deleteTask(task: Task): void {
		const tasks: Task[] = this.getTasks();
		const taskId: number = tasks.findIndex((t: Task) => t === task);

		tasks.splice(taskId, 1);
		this.updateTasks(tasks);
	}

}
