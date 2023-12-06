import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { AppSettings } from '../AppSettings';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss'],
})
export class TriangleComponent  implements OnInit {

  
  settings!: AppSettings;
  color: string = '#ffffff';
  constructor(private settingsService: SettingsService) {}

  async ngOnInit() {
    this.settings = await this.settingsService.getSettings();

    this.color = this.settings.color; 
  }

}
