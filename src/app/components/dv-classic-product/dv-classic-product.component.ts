import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dv-classic-product',
  templateUrl: './dv-classic-product.component.html',
  styleUrls: ['./dv-classic-product.component.scss']
})
export class DvClassicProductComponent {
  cards: any[] = [
    {
      img: './../../../assets/products/product-1.png',
      bg: './../../../assets/products/fusion-bg-1.png',
      title: 'Mouse Toy',
      price: 8,
    },
    {
      img: './../../../assets/products/product-2.png',
      title: 'Rascadores',
      bg: './../../../assets/products/fusion-bg-2.png',
      price: 25,
    },
    {
      img: './../../../assets/products/product-3.png',
      bg: './../../../assets/products/fusion-bg-3.png',
      title: 'Plumero',
      price: 10,
    }
  ];

  ngAfterViewInit() {
    const slider = $('.slider-classic-product');

    slider.slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      centerMode: true,
      centerPadding: '0px',
      arrows: false,
      dots: false,
      responsive:[
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
            dots: true,
            centerMode: true,
            autoplay: false,
            centerPadding: '0px',
            slidesToShow: 1,
            slidesToScroll: 1,

          }
        },
        {
          breakpoint: 768,
          settings: {
            vertical: false,
            autoplay: true,
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

  }

  navigateToWsp(titulo: string) {
    const phoneNumber = '51981140381'; // Reemplaza con el número de teléfono deseado
    const message = `Hola, estoy interesado en el producto: ${titulo}. ¿Podrías brindarme más información?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
