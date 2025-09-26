import {AfterViewInit, Component, OnDestroy} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-dv-best-products',
  templateUrl: './dv-best-products.component.html',
  styleUrls: ['./dv-best-products.component.scss']
})
export class DvBestProductsComponent implements AfterViewInit, OnDestroy {
  cards = [
    {
      title: 'Chocolates Especiales',
      image: './../../../assets/products/best-product-1.png',
    },
    {
      title: 'Chocolates Clásicos',
      image: './../../../assets/products/best-product-2.png',
    },
    {
      title: 'Café Natural',
      image: './../../../assets/products/best-product-3.png',
    },
    {
      title: 'Miel Natural',
      image: './../../../assets/products/best-product-4.png',
    },
    {
      title: 'Licores Artesanales',
      image: './../../../assets/products/best-product-5.png',
    },
    {
      title: 'Cacao en Polvo',
      image: './../../../assets/products/best-product-6.png',
    }
  ]

  ngAfterViewInit() {
    this.initializeSlider();
  }

  ngOnDestroy() {
    this.destroySlider();
  }

  private initializeSlider(): void {
    const slider = $('.slider-best-products');
    slider.slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 5000,
      centerMode: true,
      centerPadding: '0px',
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            arrows: false,
            dots: true,
            centerMode: true,
            autoplay: false,
            centerPadding: '0px',
            slidesToShow: 4,
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

  private destroySlider(): void {
    const slider = $('.slider-best-products');
    if (slider.hasClass('slick-initialized')) {
      slider.slick('unslick');
    }
  }
}
