import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
	tasks = ['Learn TypeScript', 'Learn Angular'];

	constructor() { }

	ngOnInit(): void {

	}
}
