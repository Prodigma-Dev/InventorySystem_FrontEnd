import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { BrandingComponent } from '../branding/branding.component';

@Component({
  selector: 'app-vertical-sidebar',
  imports: [BrandingComponent, MaterialModule],
  templateUrl: './vertical-sidebar.component.html',
})
export class VerticalSidebarComponent implements OnInit {
  constructor() {}
  @Input() showToggle = true;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  ngOnInit(): void {}
}
