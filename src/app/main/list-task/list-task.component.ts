import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Task } from 'src/app/_commons/models/task';

import { TaskService } from 'src/app/_commons/services/task/task.service';

@Component({
	selector: 'app-list-task',
	templateUrl: './list-task.component.html',
	styleUrls: ['./list-task.component.css'],
})
export class ListTaskComponent implements OnInit {

	public tasks!: Task[];

	constructor(private _task: TaskService) {
		this._task.tasks.subscribe((tasks: Task[]) => this.tasks = tasks);
	}

	public ngOnInit(): void {}

	public drop(event: CdkDragDrop<Task[]>): void {
		moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
		this._task.updateTasks(this.tasks);
	}

}
