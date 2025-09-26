import { Component } from '@angular/core';

@Component({
  selector: 'app-dv-cta',
  templateUrl: './dv-cta.component.html',
  styleUrls: ['./dv-cta.component.scss']
})
export class DvCtaComponent {
  navigateToWsp() {
    const phoneNumber = '51981140381'; // Reemplaza con el número de teléfono deseado
    const message = `Hola, quisiera más información`;
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  }
}
