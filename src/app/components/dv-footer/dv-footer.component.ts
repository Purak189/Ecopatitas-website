import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dv-footer',
  templateUrl: './dv-footer.component.html',
  styleUrls: ['./dv-footer.component.scss']
})
export class DvFooterComponent {
  constructor(
    private _router: Router
  ) { }
  navigateTo(url: string) {

    this._router.navigate([url]);
  }

  navigateToSection(section: string) {

    this._router.navigate([`/`]);

    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  openUrl(url: string) {
    window.open(url, '_blank');
  }
}
