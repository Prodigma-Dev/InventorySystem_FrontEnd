import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  @Input() position: string = 'static';
  currentYear = new Date().getFullYear();
}
