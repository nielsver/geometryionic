import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppSettings } from '../AppSettings';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
})
export class CircleComponent  implements OnInit {
  
  settings!: AppSettings;
  color: string = '#ffffff';
  constructor(private settingsService: SettingsService) {}

  async ngOnInit() {
    this.settings = await this.settingsService.getSettings();

    this.color = this.settings.color; 
  }

}
