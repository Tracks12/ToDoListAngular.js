import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Task } from 'src/app/_commons/models/task';
import { EditTaskComponent } from './edit-task/edit-task.component';

import { TaskService } from 'src/app/_commons/services/task/task.service';

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

	@Input() public task!: Task;

	constructor(
		private dialog: MatDialog,
		private _task: TaskService
	) {}

	public ngOnInit(): void {}
	public checkedTask = (): void => this._task.editTask(this.task);

	public editTask(): void {
		const dialogRef = this.dialog.open(EditTaskComponent, {
			data: this.task
		});

		dialogRef.afterClosed().subscribe((task: Task) => {
			task
				? this._task.editTask(task)
				: this._task.rebaseTasks();
		});
	}

	public deleteTask = (): void => this._task.deleteTask(this.task);

}
