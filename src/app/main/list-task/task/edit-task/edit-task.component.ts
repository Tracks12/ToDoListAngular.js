import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

import { Task } from 'src/app/_commons/models/task';

@Component({
	selector: 'app-edit-task',
	templateUrl: './edit-task.component.html',
	styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

	public task!: Task;
	public taskName: FormControl = new FormControl('', [Validators.required]);

	constructor(
		private dialogRef: MatDialogRef<EditTaskComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Task
	) {
		this.task = data;
	}

	public ngOnInit(): void {}
	public onCancelClick = (): void => this.dialogRef.close();
	public onConfirmClick = (): void => this.dialogRef.close(this.task);

}