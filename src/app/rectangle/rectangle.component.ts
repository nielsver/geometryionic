import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { AppSettings } from '../AppSettings';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss'],
})
export class RectangleComponent {

  settings!: AppSettings;
  color: string = '#ffffff';
  constructor(private settingsService: SettingsService) {}

  async ngOnInit() {
   this.settings = await this.settingsService.getSettings();

    this.color = this.settings.color; 
  }

}
