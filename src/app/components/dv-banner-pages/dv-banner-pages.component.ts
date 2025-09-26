import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dv-banner-pages',
  templateUrl: './dv-banner-pages.component.html',
  styleUrls: ['./dv-banner-pages.component.scss']
})
export class DvBannerPagesComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
  @Input() backgroundImage: string = './../../../assets/banner/default-banner.jpg';
  @Input() redirectUrl: string = '';

  navigateToWsp(url: string): void {
    window.open(url, '_blank');
  }
}
