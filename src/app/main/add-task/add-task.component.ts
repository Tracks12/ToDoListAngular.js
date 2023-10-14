import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Task } from 'src/app/_commons/models/task';

import { TaskService } from 'src/app/_commons/services/task/task.service';

@Component({
	selector: 'app-add-task',
	templateUrl: './add-task.component.html',
	styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

	public placeholder!: string;
	public placeholders: string[] = [
		'Mise en place de la pipeline CI CD',
		'Versionnage de la première version du code',
		'Ajout des test unitaires',
		'Liaison du DNS au serveur de la prod',
		'Go boire un café'
	];

	public taskName: FormControl = new FormControl('', [Validators.required]);

	constructor(private _task: TaskService) {}

	public ngOnInit(): void {}

	public getRandomPlaceholder(): void {
		const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
		this.placeholder = `Ex: ${this.placeholders[randomInt(0, this.placeholders.length-1)]}`;
	}

	public addTask(): void {
		if(this.taskName.invalid)
			return;

		const date: Date = new Date();
		const task: Task = {
			id: date.getTime(),
			date,
			name: this.taskName.value,
			done: false,
		}

		this._task.addTask(task);
		this.taskName.reset();
	}

}
