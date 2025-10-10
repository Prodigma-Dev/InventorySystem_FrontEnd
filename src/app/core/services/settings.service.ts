import { Injectable, signal, inject } from '@angular/core';
import { Settings } from 'src/app/shared/classes/app.settings.model';
import { LocalStorageService } from './local-storage.service';
import { Constants } from 'src/app/shared/contsants/constants';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private localStorageService = inject(LocalStorageService);
  settings = signal<Settings>(this.loadSettings());

  constructor() { }

  private loadSettings(): Settings {
    const storedSettings = this.localStorageService.get(Constants.STORAGE_THEME_SETTINGS);
    return storedSettings ? storedSettings : new Settings();
  }

  updateSettings(newSettings: Partial<Settings>) {
    this.settings.update(s => ({ ...s, ...newSettings }));
    this.localStorageService.set(Constants.STORAGE_THEME_SETTINGS, this.settings());
  }
}
