import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dv-type-selection-section',
  templateUrl: './dv-type-selection-section.component.html',
  styleUrls: ['./dv-type-selection-section.component.scss']
})
export class DvTypeSelectionSectionComponent {
  constructor(
    private _router: Router
  ) {
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
}
