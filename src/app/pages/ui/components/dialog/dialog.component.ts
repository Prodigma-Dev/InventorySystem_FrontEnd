import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  signal,
  viewChild,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { AnimationsExampleDialogComponent } from './animations-example-dialog/animations-example-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { ContentExampleDialogComponent } from './content-example-dialog/content-example-dialog.component';
import { DataExampleDialogComponent } from './data-example-dialog/data-example-dialog.component';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { FromMenuDialogComponent } from './from-menu-dialog/from-menu-dialog.component';
import { OverviewExampleDialogComponent } from './overview-example-dialog/overview-example-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  readonly dialog = inject(MatDialog);
  readonly menuTrigger = viewChild.required(MatMenuTrigger);
  readonly animal = signal('');
  readonly name = model('');

  openAnimationsExampleDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(AnimationsExampleDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogWithHeaderAndActions() {
    const dialogRef = this.dialog.open(ContentExampleDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogWithData() {
    this.dialog.open(DataExampleDialogComponent, {
      data: {
        animal: 'panda',
      },
    });
  }

  openDialogFromMenu() {
    const dialogRef = this.dialog.open(FromMenuDialogComponent, {
      restoreFocus: false,
    });

    // Manually restore focus to the menu trigger since the element that
    // opens the dialog won't be in the DOM any more when the dialog closes.
    dialogRef.afterClosed().subscribe(() => this.menuTrigger().focus());
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(OverviewExampleDialogComponent, {
      data: { name: this.name(), animal: this.animal() },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }
}
