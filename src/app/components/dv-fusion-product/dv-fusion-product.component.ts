import { Component } from '@angular/core';

declare var $: any;

interface ICard {
  img: string;
  img_bottom_right?: string;
  img_bottom_left?: string;
  img_top_right?: string;
  img_top_left?: string;
  bg: string;
  title: string;
  price: number;
}

@Component({
  selector: 'app-dv-fusion-product',
  templateUrl: './dv-fusion-product.component.html',
  styleUrls: ['./dv-fusion-product.component.scss']
})
export class DvFusionProductComponent {
  cards: ICard[] = [
    {
      img: './../../../assets/products/product-4.png',
      bg: './../../../assets/products/fusion-bg-1.png',
      title: 'Jalador de algodón',
      price: 25,
    },
    {
      img: './../../../assets/products/product-5.png',
      title: 'Botella dispensadora',
      bg: './../../../assets/products/fusion-bg-2.png',
      price: 15,
    },
    {
      img: './../../../assets/products/product-6.png',
      bg: './../../../assets/products/fusion-bg-3.png',
      title: 'Pelota olfativa',
      price: 40,
    },
  ];

  ngAfterViewInit() {
    const slider = $('.slider-fusion-product');

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
}
