import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { AppSettings } from './AppSettings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  constructor(private storage: Storage) {
    this.initStorage();
  }

  private async initStorage() {
    await this.storage.create();  
  }
  
  async getSettings(): Promise<AppSettings> {
    const settings = await this.storage.get('settings');
    return settings || {};
  }

  async setSettings(newSettings: AppSettings): Promise<void> {
    await this.storage.set('settings', newSettings);
  }
  
}
