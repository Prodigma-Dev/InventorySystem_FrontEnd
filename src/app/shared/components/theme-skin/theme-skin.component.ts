import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { SettingsService } from 'src/app/core/services/settings.service';
import { ThemeSkin } from '../../interfaces/theme-skin';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-theme-skin',
  standalone: true,
  imports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatSlideToggleModule,
    FormsModule,
    FlexLayoutModule,
    MatRadioModule
  ],
  templateUrl: './theme-skin.component.html'
})
export class ThemeSkinComponent implements OnInit {
  settingsService = inject(SettingsService);
  settings = this.settingsService.settings;
  @Output() toggleRightSidebar = new EventEmitter<void>();

  modes: ThemeSkin[] = [
    { key: 'light', icon: "light_mode", color: "#111c2d", bgColor: "#FFFFFF", name: 'Light' },
    { key: 'dark', icon: "dark_mode", color: "#FFFFFF", bgColor: "#111c2d", name: 'Dark' },
  ];

  themeNames: ThemeSkin[] = [
    { key: 'indigo', color: '#FFFFFF', bgColor: '#4f46e5', name: 'Indigo' },
    { key: 'green', color: '#FFFFFF', bgColor: '#388e3c', name: 'Green' },
    { key: 'red', color: '#FFFFFF', bgColor: '#d32f2f', name: 'Red' },
    { key: 'yellow', color: '#000000', bgColor: '#fbc02d', name: 'Yellow' },
    { key: 'cyan', color: '#000000', bgColor: '#01c0c8', name: 'Cyan' },
    { key: 'orange', color: '#FFFFFF', bgColor: '#fa896b', name: 'Orange' },
    { key: 'azure', color: '#000000', bgColor: '#007fff', name: 'Azure' },
    { key: 'violet', color: '#FFFFFF', bgColor: '#9b4f96', name: 'Violet' },
    { key: 'rose', color: '#FFFFFF', bgColor: '#f44336', name: 'Rose' }
  ];

  ngOnInit() {
  }

  setThemeName(name: string) {
    this.settingsService.updateSettings({ themeColor: name });
  }

  setThemeMode(mode: string) {
    this.settingsService.updateSettings({ themeMode: mode });
  }

  setThemeRtl(isRtl: boolean) {
    this.settingsService.updateSettings({ rtl: isRtl });
  }
  
  setThemeMenuType(name: string) {
    this.settingsService.updateSettings({ menuType: name });
  }
  
  setThemeMenu(name: string) {
    this.settingsService.updateSettings({ menu: name });
  }
  
  setThemeContainer(name: string) {
    this.settingsService.updateSettings({ container: name });
  }
  
  setThemeBreadcrump(hasBreadcrump: boolean) {
    this.settingsService.updateSettings({ breadcrump: hasBreadcrump });
  }
  
  setThemeFooter(hasFooter: boolean) {
    this.settingsService.updateSettings({ hasFooter: hasFooter });
  }
  
  setThemeFooterPosition(event: any) {
    this.settingsService.updateSettings({ footerPosition: event.value });
  }
  
}
