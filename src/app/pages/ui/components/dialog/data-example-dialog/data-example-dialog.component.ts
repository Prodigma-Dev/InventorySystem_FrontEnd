import { Component, inject } from '@angular/core';
import { MatDialogTitle, MatDialogContent, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-data-example-dialog',
  templateUrl: './data-example-dialog.component.html',
  imports: [MatDialogTitle, MatDialogContent],
})
export class DataExampleDialogComponent {
  data = inject(MAT_DIALOG_DATA);
}
