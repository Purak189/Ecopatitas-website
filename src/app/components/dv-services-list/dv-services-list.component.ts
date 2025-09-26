import {Component, Input} from '@angular/core';

interface services {
  image: string,
  title: string,
  description: string[]
}

@Component({
  selector: 'app-dv-services-list',
  templateUrl: './dv-services-list.component.html',
  styleUrls: ['./dv-services-list.component.scss']
})

export class DvServicesListComponent {
  @Input() services: services[] = [];

  openWhatsappQuote(title: string) {
    const message = `Hola 👋 Me gustaría saber más sobre el servicio: *${title}* 🏠. ¿Podrías brindarme más información sobre este servicio? Gracias 😊`;

    const encodedMessage = encodeURIComponent(message);
    const phone = '51960820517';

    const url = `https://wa.me/${phone}?text=${encodedMessage}`;
    window.open(url, '_blank');
  }
}
