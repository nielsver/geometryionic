import { Component } from '@angular/core';
import { AppSettings } from '../AppSettings';
import { SettingsService } from '../settings.service';
import { Dialog } from '@capacitor/dialog';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  color: string ="#ffffff";
  message = '';
  name: string = '';
  isModalOpen = false;
  settings: AppSettings = {color: "#ffffff", metric: true};
  waarde: string = 'Metric';
  waardebool: boolean = true;


  constructor(private settingsService: SettingsService) {}
  async ngOnInit(){
    this.settings = await this.settingsService.getSettings();
    this.color = this.settings.color;
  }

  setOpen(isOpen: boolean) {
      this.isModalOpen = isOpen;
  }
  async saveSettings() {
    if(this.waarde == 'Metric') {
      this.waardebool = true;
    }
    else {
      this.waardebool = false;
    }
    console.log(this.color);
    this.settings.color = this.color;
    this.settings.metric = this.waardebool;
    await this.settingsService.setSettings(this.settings);

    const showAlert = async () => {
      await Dialog.alert({
        title: 'settings',
        message: 'settings saved',
      });
    };
    showAlert();
    window.location.reload();
  
  }
}
