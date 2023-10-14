import { Component, OnInit } from '@angular/core';

import { Task } from '../_commons/models/task';

import { TaskService } from '../_commons/services/task/task.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	public total!: number;
	public dones!: number;

	constructor(private _task: TaskService) {
		this._task.tasks.subscribe((tasks: Task[]) => {
			this.total = tasks.length
			this.dones = tasks.filter((task: Task) => task.done).length;
		});
	}

	public ngOnInit(): void {}

}
