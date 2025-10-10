import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  imports: [MatListModule, MatDividerModule, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DividerComponent {

}
