import { Component } from '@angular/core';

@Component({
  selector: 'app-dv-our-values',
  templateUrl: './dv-our-values.component.html',
  styleUrls: ['./dv-our-values.component.scss']
})
export class DvOurValuesComponent {
  values: any[] = [
    {
      img: './../../../assets/values/value-1.svg',
      title: 'Pasión agrícola',
      description: 'Nuestro origen está en el campo. Cada chocolate nace del amor por la tierra y del trabajo de generaciones de agricultores.'
    },
    {
      img: './../../../assets/values/value-2.svg',
      title: 'Autenticidad',
      description: 'Creamos chocolates con cacao natural y sabor orgánico, preservando la esencia pura de nuestra Amazonía.'
    },
    {
      img: './../../../assets/values/value-3.svg',
      title: 'Calidad',
      description: 'Cuidamos cada detalle del proceso para ofrecer un producto que refleje lo mejor de nuestra región.'
    },
    {
      img: './../../../assets/values/value-4.svg',
      title: 'Tradición familiar',
      description: 'Sojhadi es unión, es familia. Transformamos el cacao en experiencias que llevan consigo nuestra historia y raíces.'
    },
    {
      img: './../../../assets/values/value-5.svg',
      title: 'Sostenibilidad',
      description: 'Trabajamos de manera responsable, respetando la naturaleza y buscando siempre un equilibrio con ella.'
    },
    {
      img: './../../../assets/values/value-6.svg',
      title: 'Orgullo local',
      description: 'Somos Tocache, somos Amazonía. Nuestros chocolates son el reflejo de la riqueza agrícola de nuestra tierra.'
    }
  ]
}
