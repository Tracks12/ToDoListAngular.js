import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	@Input() public appName!: string;
	@Input() public appVersion!: string;

	constructor(private snackBar: MatSnackBar) {}

	public ngOnInit(): void {}
	public onClick(): void {
		this.snackBar.open('Une application faite par Anarchy_', 'Fermer', {
			duration: 5000,
			horizontalPosition: 'center',
			verticalPosition: 'bottom'
		});
	}

}
