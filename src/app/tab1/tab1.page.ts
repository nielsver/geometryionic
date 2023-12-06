import { Component} from '@angular/core';
import { SettingsService } from '../settings.service';
import { AppSettings } from '../AppSettings';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  settings!: AppSettings;
  color: string = '#ffffff';
  Metric: boolean = true;
  length: number = 0;
  width: number = 0;
  base: number = 0;
  height: number = 0;

  constructor(private settingsService: SettingsService,private alertController: AlertController, public toastController: ToastController) {}

  async ngOnInit() {
    this.settings = await this.settingsService.getSettings();


    this.color = this.settings.color;
    this.Metric = this.settings.metric;
  }

  async presentToast(area: number) {
    const toast = await this.toastController.create({
      message: `Triangle Surface Area: ${area.toFixed(2)} square ${this.Metric ? 'meters' : 'inches'}`,
      duration: 3000,
      position: 'bottom',
      buttons: [
        {
          side: 'end',
          text: 'Dismiss',
          handler: () => {
            toast.dismiss();
            return false;
          },
        },
      ],
    });
    toast.present();
  }
  async onTriangleClick() {
    const alert = await this.alertController.create({
      header: this.Metric ? 'Triangle Surface Area (Metric)' : 'Triangle Surface Area (Imperial)',
      message: this.Metric ? 'Enter the base and height in meters:' : 'Enter the base and height in inches:',
      inputs: [
        {
          name: 'base',
          type: 'number',
          placeholder: this.Metric ? 'Base (m)' : 'Base (in)',
        },
        {
          name: 'height',
          type: 'number',
          placeholder: this.Metric ? 'Height (m)' : 'Height (in)',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (data) => {
            const base = data.base;
            const height = data.height;
            if (base && height) {
              const area = this.Metric ? this.calculateMetricTriangleArea(base, height) : this.calculateImperialTriangleArea(base, height);
              console.log('Triangle Surface Area:', area);
              this.presentToast(area);
            }
          },
        },
      ],
    });
    await alert.present();
  }
  
  calculateMetricTriangleArea(base: number, height: number): number {
    return 0.5 * base * height;
  }
  
  calculateImperialTriangleArea(base: number, height: number): number {
    return 0.5 * base * height * Math.pow(0.0254, 2); 
  }
  
  
  async onRectangleClick() {
    const alert = await this.alertController.create({
      header: this.Metric ? 'Rectangle Surface Area (Metric)' : 'Rectangle Surface Area (Imperial)',
      message: this.Metric ? 'Enter the length and width in meters:' : 'Enter the length and width in inches:',
      inputs: [
        {
          name: 'length',
          type: 'number',
          placeholder: this.Metric ? 'Length (m)' : 'Length (in)',
        },
        {
          name: 'width',
          type: 'number',
          placeholder: this.Metric ? 'Width (m)' : 'Width (in)',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (data) => {
            const length = data.length;
            const width = data.width;
            if (length && width) {
              const area = this.Metric ? this.calculateMetricRectangleArea(length, width) : this.calculateImperialRectangleArea(length, width);
              this.presentToast(area);
              console.log('Rectangle Surface Area:', area);
            }
          },
        },
      ],
    });
  
    await alert.present();
  }
  
  calculateMetricRectangleArea(length: number, width: number): number {
    return length * width;
  }
  
  calculateImperialRectangleArea(length: number, width: number): number {
    return length * width;
  }
  
  
  async onCircleClick() {
    const alert = await this.alertController.create({
      header: this.Metric ? 'Circle Surface Area (Metric)' : 'Circle Surface Area (Imperial)',
      message: this.Metric ? 'Enter the radius in meters:' : 'Enter the radius in inches:',
      inputs: [
        {
          name: 'radius',
          type: 'number',
          placeholder: this.Metric ? 'Radius (m)' : 'Radius (in)',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (data) => {
            const radius = data.radius;
            if (radius) {
              const area = this.Metric ? this.calculateMetricCircleArea(radius) : this.calculateImperialCircleArea(radius);
              this.presentToast(area);
              console.log('Circle Surface Area:', area);
            }
          },
        },
      ],
    });
  
    await alert.present();
  }
  
  calculateMetricCircleArea(radius: number): number {
    return Math.PI * Math.pow(radius, 2);
  }
  
  calculateImperialCircleArea(radius: number): number {
    return Math.PI * Math.pow(radius * 0.0254, 2); 
  }
  


}
